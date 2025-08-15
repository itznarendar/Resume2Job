import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ComponentQuickAccess = () => {
  const componentCategories = [
    {
      category: "Buttons",
      components: [
        "Button variants (default, destructive, outline, secondary, ghost, link)",
        "Button sizes (sm, default, lg, icon)",
        "Button states (normal, disabled, with icons)"
      ]
    },
    {
      category: "Form Controls",
      components: [
        "Input fields (text, email, password, disabled)",
        "Textarea and Select dropdowns",
        "Checkboxes and Radio buttons",
        "Switch toggles and Sliders"
      ]
    },
    {
      category: "Data Display",
      components: [
        "Badges (default, secondary, destructive, outline, custom colors)",
        "Avatars (with images, fallbacks, different sizes)",
        "Progress bars and indicators",
        "Separators (horizontal and vertical)"
      ]
    },
    {
      category: "Alerts & Feedback",
      components: [
        "Alert variants (info, success, warning, error)",
        "Toast notifications",
        "Loading states"
      ]
    },
    {
      category: "Layout & Navigation",
      components: [
        "Cards (simple, featured, with actions)",
        "Tabs (horizontal navigation)",
        "Accordion (collapsible sections)",
        "Scroll areas (for long content)"
      ]
    },
    {
      category: "Overlays & Dialogs",
      components: [
        "Modal dialogs (with header, content, footer)",
        "Alert dialogs (confirmation prompts)",
        "Popovers (floating content)",
        "Calendar (date picker)"
      ]
    },
    {
      category: "Visual Elements",
      components: [
        "Icons (user, settings, search, bell, heart, star, etc.)",
        "Color palette (primary blues, status colors)",
        "Typography scales",
        "Spacing system"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Component Library Quick Reference</h2>
        <p className="text-gray-600">All available components organized by category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {componentCategories.map((cat, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{cat.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cat.components.map((component, idx) => (
                  <div key={idx} className="text-sm text-gray-600">
                    • {component}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="font-semibold text-blue-900 mb-2">How to Use This Library</h3>
            <p className="text-blue-800 text-sm mb-4">
              Navigate to <Badge className="mx-1">/components</Badge> to see live examples of all components with interactive demos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-medium text-blue-900 mb-2">For Developers:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Copy component usage examples</li>
                  <li>• See all available props and variants</li>
                  <li>• Test component interactions</li>
                  <li>• Reference design tokens</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2">For Designers:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• View consistent component styles</li>
                  <li>• Check color palette and spacing</li>
                  <li>• See responsive behavior</li>
                  <li>• Understand component hierarchy</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
