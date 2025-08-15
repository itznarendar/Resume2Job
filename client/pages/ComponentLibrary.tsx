import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Copy, 
  Heart, 
  Star, 
  Search, 
  Download, 
  Upload, 
  Edit, 
  Trash2, 
  Settings, 
  User, 
  Bell, 
  Calendar as CalendarIcon,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  Zap,
  Crown,
  ChevronDown
} from 'lucide-react';

const ComponentSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">{title}</h2>
    {children}
  </div>
);

const ComponentDemo = ({ title, description, children }: { 
  title: string; 
  description?: string; 
  children: React.ReactNode 
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {children}
      </div>
    </CardContent>
  </Card>
);

export default function ComponentLibrary() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Design System Component Library</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive showcase of all available UI components in the Resume2Job design system. 
              Perfect for developers to reference and reuse components across the application.
            </p>
          </div>

          <div className="space-y-12">
            {/* Buttons */}
            <ComponentSection title="Buttons">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ComponentDemo title="Button Variants" description="Different button styles for various use cases">
                  <div className="flex flex-wrap gap-3">
                    <Button>Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Button Sizes" description="Buttons in different sizes">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Button States" description="Different button states">
                  <div className="flex flex-wrap gap-3">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    <Button>
                      <Download className="w-4 h-4 mr-2" />
                      With Icon
                    </Button>
                  </div>
                </ComponentDemo>
              </div>
            </ComponentSection>

            {/* Form Controls */}
            <ComponentSection title="Form Controls">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ComponentDemo title="Input Fields" description="Various input field types">
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter password" />
                    </div>
                    <div>
                      <Label htmlFor="disabled">Disabled Input</Label>
                      <Input id="disabled" disabled placeholder="Disabled input" />
                    </div>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Textarea & Select" description="Text areas and dropdown selects">
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Type your message here" />
                    </div>
                    <div>
                      <Label htmlFor="select">Select Option</Label>
                      <Select value={selectValue} onValueChange={setSelectValue}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Checkboxes & Radio" description="Selection controls">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Checkboxes</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="check1" />
                        <Label htmlFor="check1">Accept terms and conditions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="check2" defaultChecked />
                        <Label htmlFor="check2">Subscribe to newsletter</Label>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Radio Group</Label>
                      <RadioGroup defaultValue="option1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option1" id="r1" />
                          <Label htmlFor="r1">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option2" id="r2" />
                          <Label htmlFor="r2">Option 2</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Switch & Slider" description="Toggle and range controls">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="switch" 
                        checked={switchValue}
                        onCheckedChange={setSwitchValue}
                      />
                      <Label htmlFor="switch">Enable notifications</Label>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Slider ({sliderValue[0]})</Label>
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </ComponentDemo>
              </div>
            </ComponentSection>

            {/* Data Display */}
            <ComponentSection title="Data Display">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ComponentDemo title="Badges" description="Labels and status indicators">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge className="bg-green-100 text-green-800">Success</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
                    <Badge className="bg-purple-100 text-purple-800">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Avatars" description="User profile pictures and placeholders">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="text-lg">XL</AvatarFallback>
                    </Avatar>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Progress Bars" description="Progress indicators">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Loading</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Separator" description="Visual dividers">
                  <div className="space-y-4">
                    <div>
                      <p>Content above</p>
                      <Separator className="my-4" />
                      <p>Content below</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>Left</span>
                      <Separator orientation="vertical" className="h-6" />
                      <span>Right</span>
                    </div>
                  </div>
                </ComponentDemo>
              </div>
            </ComponentSection>

            {/* Alerts & Notifications */}
            <ComponentSection title="Alerts & Feedback">
              <div className="grid grid-cols-1 gap-6">
                <ComponentDemo title="Alert Variants" description="Different alert types for various messages">
                  <div className="space-y-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription>
                        This is an informational alert with some additional context.
                      </AlertDescription>
                    </Alert>
                    
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertTitle className="text-green-800">Success</AlertTitle>
                      <AlertDescription className="text-green-700">
                        Your action was completed successfully.
                      </AlertDescription>
                    </Alert>
                    
                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                      <AlertTitle className="text-yellow-800">Warning</AlertTitle>
                      <AlertDescription className="text-yellow-700">
                        Please review the information before proceeding.
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="destructive">
                      <XCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        Something went wrong. Please try again.
                      </AlertDescription>
                    </Alert>
                  </div>
                </ComponentDemo>
              </div>
            </ComponentSection>

            {/* Layout Components */}
            <ComponentSection title="Layout & Navigation">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ComponentDemo title="Cards" description="Container components for content">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Simple Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>This is a basic card with header and content.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-blue-200">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="text-blue-900">Featured Card</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p>This card has custom styling for emphasis.</p>
                        <Button className="mt-4" size="sm">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </ComponentDemo>

                <ComponentDemo title="Tabs" description="Tabbed navigation component">
                  <Tabs defaultValue="tab1" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="mt-4">
                      <p>Content for the first tab.</p>
                    </TabsContent>
                    <TabsContent value="tab2" className="mt-4">
                      <p>Content for the second tab.</p>
                    </TabsContent>
                    <TabsContent value="tab3" className="mt-4">
                      <p>Content for the third tab.</p>
                    </TabsContent>
                  </Tabs>
                </ComponentDemo>

                <ComponentDemo title="Accordion" description="Collapsible content sections">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Section 1</AccordionTrigger>
                      <AccordionContent>
                        This is the content for the first accordion section.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Section 2</AccordionTrigger>
                      <AccordionContent>
                        This is the content for the second accordion section.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Section 3</AccordionTrigger>
                      <AccordionContent>
                        This is the content for the third accordion section.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ComponentDemo>

                <ComponentDemo title="Scroll Area" description="Scrollable content container">
                  <ScrollArea className="h-48 w-full border rounded-md p-4">
                    <div className="space-y-2">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} className="text-sm">
                          Scrollable item {i + 1}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </ComponentDemo>
              </div>
            </ComponentSection>

            {/* Overlays & Dialogs */}
            <ComponentSection title="Overlays & Dialogs">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ComponentDemo title="Dialog" description="Modal dialog windows">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                          This is a modal dialog with header, content, and footer.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p>Dialog content goes here.</p>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Confirm</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </ComponentDemo>

                <ComponentDemo title="Alert Dialog" description="Confirmation dialogs">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete Item</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the item.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </ComponentDemo>

                <ComponentDemo title="Popover" description="Floating content containers">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        Open Popover
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-3">
                        <h3 className="font-medium">Popover Content</h3>
                        <p className="text-sm text-gray-600">
                          This is a popover with custom content and actions.
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm">Action</Button>
                          <Button variant="outline" size="sm">Cancel</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </ComponentDemo>

                <ComponentDemo title="Calendar" description="Date picker component">
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                </ComponentDemo>
              </div>
            </ComponentSection>

            {/* Icons Preview */}
            <ComponentSection title="Icons">
              <ComponentDemo title="Common Icons" description="Frequently used icons in the application">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
                  {[
                    { icon: User, name: 'User' },
                    { icon: Settings, name: 'Settings' },
                    { icon: Search, name: 'Search' },
                    { icon: Bell, name: 'Bell' },
                    { icon: Heart, name: 'Heart' },
                    { icon: Star, name: 'Star' },
                    { icon: Download, name: 'Download' },
                    { icon: Upload, name: 'Upload' },
                    { icon: Edit, name: 'Edit' },
                    { icon: Trash2, name: 'Trash' },
                    { icon: Copy, name: 'Copy' },
                    { icon: CalendarIcon, name: 'Calendar' },
                  ].map(({ icon: Icon, name }) => (
                    <div key={name} className="flex flex-col items-center space-y-2 p-3 border rounded-lg hover:bg-gray-50">
                      <Icon className="w-6 h-6 text-gray-700" />
                      <span className="text-xs text-gray-600">{name}</span>
                    </div>
                  ))}
                </div>
              </ComponentDemo>
            </ComponentSection>

            {/* Color Palette */}
            <ComponentSection title="Color Palette">
              <ComponentDemo title="Brand Colors" description="Primary color palette used throughout the application">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Primary Colors</h4>
                    <div className="grid grid-cols-6 gap-3">
                      {[
                        { color: 'bg-blue-50', name: 'Blue 50' },
                        { color: 'bg-blue-100', name: 'Blue 100' },
                        { color: 'bg-blue-200', name: 'Blue 200' },
                        { color: 'bg-blue-500', name: 'Blue 500' },
                        { color: 'bg-blue-600', name: 'Blue 600' },
                        { color: 'bg-blue-700', name: 'Blue 700' },
                      ].map(({ color, name }) => (
                        <div key={name} className="text-center">
                          <div className={`w-full h-16 ${color} rounded-lg border mb-2`}></div>
                          <span className="text-xs text-gray-600">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Status Colors</h4>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { color: 'bg-green-500', name: 'Success' },
                        { color: 'bg-yellow-500', name: 'Warning' },
                        { color: 'bg-red-500', name: 'Error' },
                        { color: 'bg-gray-500', name: 'Neutral' },
                      ].map(({ color, name }) => (
                        <div key={name} className="text-center">
                          <div className={`w-full h-16 ${color} rounded-lg border mb-2`}></div>
                          <span className="text-xs text-gray-600">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ComponentDemo>
            </ComponentSection>
          </div>
        </div>
      </div>
    </Layout>
  );
}
