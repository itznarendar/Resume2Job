import { useState, useCallback } from 'react';

interface ComponentConfig {
  type: string;
  name: string;
  props: Record<string, any>;
}

interface UseComponentGeneratorReturn {
  generateComponent: (config: ComponentConfig) => void;
  generatedCode: string;
  isGenerating: boolean;
  error: string | null;
}

export const useComponentGenerator = (): UseComponentGeneratorReturn => {
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateComponentCode = useCallback((config: ComponentConfig): string => {
    const { type, name, props } = config;
    
    const imports = new Set(['React']);
    let componentCode = '';
    let interfaceCode = '';

    // Generate TypeScript interface
    interfaceCode = `interface ${name}Props {
  children?: React.ReactNode;
  className?: string;`;

    switch (type) {
      case 'button':
        imports.add('{ cn }');
        interfaceCode += `
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: () => void;
  disabled?: boolean;`;
        
        componentCode = `export const ${name}: React.FC<${name}Props> = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  onClick,
  disabled = false,
  ...props
}) => {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline'
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};`;
        break;

      case 'card':
        imports.add('{ cn }');
        interfaceCode += `
  title?: string;
  content?: string;`;
        
        componentCode = `export const ${name}: React.FC<${name}Props> = ({
  children,
  className,
  title,
  content,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {title && (
        <div className="flex flex-col space-y-1.5 p-6 pb-2">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            {title}
          </h3>
        </div>
      )}
      <div className="p-6 pt-0">
        {content && <p className="text-sm text-muted-foreground">{content}</p>}
        {children}
      </div>
    </div>
  );
};`;
        break;

      case 'input':
        imports.add('{ cn }');
        interfaceCode += `
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;`;
        
        componentCode = `export const ${name}: React.FC<${name}Props> = ({
  className,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};`;
        break;

      case 'modal':
        imports.add('{ cn }');
        interfaceCode += `
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;`;
        
        componentCode = `export const ${name}: React.FC<${name}Props> = ({
  children,
  className,
  isOpen,
  onClose,
  title,
  content,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/80" 
        onClick={onClose}
      />
      <div
        className={cn(
          'relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg',
          className
        )}
        {...props}
      >
        {title && (
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        )}
        <div className="grid gap-4 py-4">
          {content && <p className="text-sm text-muted-foreground">{content}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};`;
        break;

      default:
        componentCode = `export const ${name}: React.FC<${name}Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  );
};`;
    }

    interfaceCode += `
}`;

    // Generate imports
    const importStatements = Array.from(imports).map(imp => {
      if (imp === 'React') return `import React from 'react';`;
      if (imp === '{ cn }') return `import { cn } from '@/lib/utils';`;
      return `import ${imp} from 'react';`;
    }).join('\n');

    return `${importStatements}

${interfaceCode}

${componentCode}

// Usage Example:
// <${name} 
//   ${type === 'button' ? 'variant="default"\n//   onClick={() => console.log("clicked")}' : ''}
//   ${type === 'card' ? 'title="Sample Title"\n//   content="Sample content"' : ''}
//   ${type === 'input' ? 'placeholder="Enter text..."\n//   onChange={(e) => console.log(e.target.value)}' : ''}
//   ${type === 'modal' ? 'isOpen={true}\n//   onClose={() => setIsOpen(false)}\n//   title="Modal Title"' : ''}
// >
//   ${type === 'button' ? 'Button Text' : type === 'card' ? 'Card Content' : 'Content'}
// </${name}>`;
  }, []);

  const generateComponent = useCallback(async (config: ComponentConfig) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const code = generateComponentCode(config);
      setGeneratedCode(code);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate component');
    } finally {
      setIsGenerating(false);
    }
  }, [generateComponentCode]);

  return {
    generateComponent,
    generatedCode,
    isGenerating,
    error
  };
};
