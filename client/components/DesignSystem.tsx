import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Palette,
  Type,
  Move,
  Circle,
  Download
} from 'lucide-react';

export const DesignSystem: React.FC = () => {
  const [selectedColor, setSelectedColor] = React.useState('#3b82f6');
  const [fontSize, setFontSize] = React.useState([16]);
  const [borderRadius, setBorderRadius] = React.useState([8]);
  const [spacing, setSpacing] = React.useState([16]);

  const colorPalette = [
    { name: 'Primary', value: '#3b82f6', class: 'bg-blue-500' },
    { name: 'Secondary', value: '#6b7280', class: 'bg-gray-500' },
    { name: 'Success', value: '#10b981', class: 'bg-emerald-500' },
    { name: 'Warning', value: '#f59e0b', class: 'bg-amber-500' },
    { name: 'Danger', value: '#ef4444', class: 'bg-red-500' },
    { name: 'Info', value: '#06b6d4', class: 'bg-cyan-500' }
  ];

  const fontSizes = [
    { name: 'xs', size: '12px', class: 'text-xs' },
    { name: 'sm', size: '14px', class: 'text-sm' },
    { name: 'base', size: '16px', class: 'text-base' },
    { name: 'lg', size: '18px', class: 'text-lg' },
    { name: 'xl', size: '20px', class: 'text-xl' },
    { name: '2xl', size: '24px', class: 'text-2xl' }
  ];

  const spacingScale = [
    { name: '1', size: '4px', class: 'p-1' },
    { name: '2', size: '8px', class: 'p-2' },
    { name: '3', size: '12px', class: 'p-3' },
    { name: '4', size: '16px', class: 'p-4' },
    { name: '6', size: '24px', class: 'p-6' },
    { name: '8', size: '32px', class: 'p-8' }
  ];

  return (
    <ScrollArea className="h-96">
      <div className="space-y-6">
        {/* Colors */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Palette className="w-4 h-4" />
            <h3 className="font-medium text-sm">Colors</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {colorPalette.map((color) => (
              <div
                key={color.name}
                className="flex items-center space-x-2 p-2 rounded-md border cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedColor(color.value)}
              >
                <div className={`w-4 h-4 rounded ${color.class}`} />
                <div>
                  <p className="text-xs font-medium">{color.name}</p>
                  <p className="text-xs text-gray-500">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-3 space-y-2">
            <Label htmlFor="customColor" className="text-xs">Custom Color</Label>
            <Input
              id="customColor"
              type="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full h-8"
            />
          </div>
        </div>

        <Separator />

        {/* Typography */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Type className="w-4 h-4" />
            <h3 className="font-medium text-sm">Typography</h3>
          </div>
          <div className="space-y-2">
            {fontSizes.map((font) => (
              <div
                key={font.name}
                className="flex items-center justify-between p-2 rounded-md border hover:bg-gray-50"
              >
                <span className={`${font.class} font-medium`}>
                  Sample Text
                </span>
                <Badge variant="outline" className="text-xs">
                  {font.size}
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="mt-3 space-y-2">
            <Label className="text-xs">Font Size: {fontSize[0]}px</Label>
            <Slider
              value={fontSize}
              onValueChange={setFontSize}
              min={12}
              max={32}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <Separator />

        {/* Spacing */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Move className="w-4 h-4" />
            <h3 className="font-medium text-sm">Spacing</h3>
          </div>
          <div className="space-y-2">
            {spacingScale.map((space) => (
              <div
                key={space.name}
                className="flex items-center justify-between p-2 rounded-md border hover:bg-gray-50"
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="bg-blue-100 border border-blue-300"
                    style={{ 
                      width: space.size, 
                      height: space.size,
                      minWidth: '8px',
                      minHeight: '8px'
                    }}
                  />
                  <span className="text-sm">Space {space.name}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {space.size}
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="mt-3 space-y-2">
            <Label className="text-xs">Spacing: {spacing[0]}px</Label>
            <Slider
              value={spacing}
              onValueChange={setSpacing}
              min={4}
              max={64}
              step={4}
              className="w-full"
            />
          </div>
        </div>

        <Separator />

        {/* Border Radius */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Circle className="w-4 h-4" />
            <h3 className="font-medium text-sm">Border Radius</h3>
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Radius: {borderRadius[0]}px</Label>
            <Slider
              value={borderRadius}
              onValueChange={setBorderRadius}
              min={0}
              max={24}
              step={2}
              className="w-full"
            />
            <div className="grid grid-cols-4 gap-2 mt-3">
              {[0, 4, 8, 12, 16, 20].map((radius) => (
                <div
                  key={radius}
                  className="bg-blue-500 h-8 flex items-center justify-center text-white text-xs"
                  style={{ borderRadius: `${radius}px` }}
                >
                  {radius}px
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        {/* Export Design Tokens */}
        <div>
          <Button variant="outline" className="w-full" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Design Tokens
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
