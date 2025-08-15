import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ComponentPreviewProps {
  componentType: string;
  componentName: string;
  props: Record<string, any>;
  device: 'desktop' | 'tablet' | 'mobile';
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  componentType,
  componentName,
  props,
  device
}) => {
  const deviceClasses = {
    desktop: 'w-full',
    tablet: 'w-[768px] mx-auto',
    mobile: 'w-[375px] mx-auto'
  };

  const renderComponent = () => {
    switch (componentType) {
      case 'button':
        return (
          <Button 
            variant={props.variant || 'default'}
            size={props.size || 'default'}
            className={cn(props.className)}
          >
            {props.children || 'Click me'}
          </Button>
        );
      
      case 'card':
        return (
          <Card className={cn('w-full max-w-md', props.className)}>
            <CardHeader>
              <CardTitle>{props.title || 'Card Title'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {props.content || 'This is a sample card component with some content.'}
              </p>
            </CardContent>
          </Card>
        );
      
      case 'input':
        return (
          <div className="w-full max-w-md space-y-2">
            <label className="text-sm font-medium">
              {props.label || 'Input Label'}
            </label>
            <Input
              placeholder={props.placeholder || 'Enter text...'}
              type={props.type || 'text'}
              className={cn(props.className)}
            />
          </div>
        );
      
      case 'modal':
        return (
          <Card className="w-full max-w-md mx-auto border-2 border-dashed border-gray-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {props.title || 'Modal Title'}
                <Badge variant="secondary">Modal Preview</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {props.content || 'This is a modal component preview.'}
              </p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Confirm</Button>
              </div>
            </CardContent>
          </Card>
        );
      
      case 'form':
        return (
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>{props.title || 'Sample Form'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Enter your name" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" className="mt-1" />
              </div>
              <Button className="w-full">Submit</Button>
            </CardContent>
          </Card>
        );
      
      case 'navbar':
        return (
          <nav className="w-full bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-lg">
                {props.brand || 'Brand'}
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
              <Button size="sm">Get Started</Button>
            </div>
          </nav>
        );
      
      default:
        return (
          <div className="text-center text-gray-500 py-8">
            <p>Select a component type to see the preview</p>
          </div>
        );
    }
  };

  return (
    <div className={cn(
      'bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300',
      deviceClasses[device]
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <Badge variant="outline" className="text-xs">
          {componentName}
        </Badge>
      </div>
      
      <div className="min-h-[200px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
        {renderComponent()}
      </div>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        Preview - {device} view
      </div>
    </div>
  );
};
