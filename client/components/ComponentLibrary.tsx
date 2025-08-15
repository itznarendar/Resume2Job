import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  MousePointer,
  Square,
  Type,
  Image,
  Layout,
  Navigation,
  Table,
  List,
  Calendar,
  BarChart3
} from 'lucide-react';

interface ComponentItem {
  id: string;
  name: string;
  icon: React.ElementType;
  category: string;
  description: string;
}

const componentLibrary: ComponentItem[] = [
  {
    id: 'button',
    name: 'Button',
    icon: MousePointer,
    category: 'Input',
    description: 'Interactive button component'
  },
  {
    id: 'card',
    name: 'Card',
    icon: Square,
    category: 'Layout',
    description: 'Container for content'
  },
  {
    id: 'input',
    name: 'Input',
    icon: Type,
    category: 'Input',
    description: 'Text input field'
  },
  {
    id: 'modal',
    name: 'Modal',
    icon: Layout,
    category: 'Overlay',
    description: 'Dialog overlay component'
  },
  {
    id: 'form',
    name: 'Form',
    icon: List,
    category: 'Input',
    description: 'Form with validation'
  },
  {
    id: 'navbar',
    name: 'Navigation',
    icon: Navigation,
    category: 'Layout',
    description: 'Navigation bar component'
  },
  {
    id: 'table',
    name: 'Table',
    icon: Table,
    category: 'Data',
    description: 'Data table component'
  },
  {
    id: 'calendar',
    name: 'Calendar',
    icon: Calendar,
    category: 'Input',
    description: 'Date picker component'
  },
  {
    id: 'chart',
    name: 'Chart',
    icon: BarChart3,
    category: 'Data',
    description: 'Data visualization'
  }
];

const categories = ['All', 'Input', 'Layout', 'Data', 'Overlay'];

interface ComponentLibraryProps {
  selectedComponent: string;
  onSelectComponent: (componentId: string) => void;
}

export const ComponentLibrary: React.FC<ComponentLibraryProps> = ({
  selectedComponent,
  onSelectComponent
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredComponents = React.useMemo(() => {
    return selectedCategory === 'All'
      ? componentLibrary
      : componentLibrary.filter(comp => comp.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="text-xs"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Component List */}
      <ScrollArea className="h-[calc(100vh-300px)]">
        <div className="space-y-2">
          {filteredComponents.map((component) => {
            const Icon = component.icon;
            const isSelected = selectedComponent === component.id;
            
            return (
              <div
                key={component.id}
                className={cn(
                  'p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-sm',
                  isSelected
                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300'
                )}
                onClick={() => onSelectComponent(component.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className={cn(
                    'w-8 h-8 rounded-md flex items-center justify-center',
                    isSelected
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  )}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-sm text-gray-900 truncate">
                        {component.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs"
                      >
                        {component.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
