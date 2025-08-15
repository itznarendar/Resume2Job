import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Plus, 
  Download, 
  Eye, 
  Save, 
  FileText, 
  User, 
  Briefcase, 
  GraduationCap,
  Award,
  Phone,
  Mail,
  MapPin,
  Trash2,
  Edit,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export default function Resume() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  });

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    setExperiences([...experiences, newExp]);
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: ''
    };
    setEducation([...education, newEdu]);
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'Intermediate'
    };
    setSkills([...skills, newSkill]);
  };

  const deviceIcons = {
    desktop: Monitor,
    tablet: Tablet,
    mobile: Smartphone
  };

  const deviceClasses = {
    desktop: 'w-full',
    tablet: 'w-[768px] mx-auto',
    mobile: 'w-[375px] mx-auto'
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Builder</h1>
            <p className="text-gray-600">Create a professional resume in minutes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Editor Panel */}
            <div className="lg:col-span-5">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Edit className="w-5 h-5 mr-2" />
                    Edit Resume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="personal" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="personal">
                        <User className="w-4 h-4 mr-1" />
                        Personal
                      </TabsTrigger>
                      <TabsTrigger value="experience">
                        <Briefcase className="w-4 h-4 mr-1" />
                        Work
                      </TabsTrigger>
                      <TabsTrigger value="education">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        Education
                      </TabsTrigger>
                      <TabsTrigger value="skills">
                        <Award className="w-4 h-4 mr-1" />
                        Skills
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="personal" className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            value={personalInfo.fullName}
                            onChange={(e) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={personalInfo.email}
                              onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              value={personalInfo.phone}
                              onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={personalInfo.location}
                            onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                            placeholder="New York, NY"
                          />
                        </div>
                        <div>
                          <Label htmlFor="summary">Professional Summary</Label>
                          <Textarea
                            id="summary"
                            value={personalInfo.summary}
                            onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                            placeholder="Write a brief summary of your professional background..."
                            rows={4}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="experience" className="space-y-4">
                      <ScrollArea className="h-96">
                        <div className="space-y-4">
                          {experiences.map((exp) => (
                            <Card key={exp.id} className="p-4">
                              <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                  <Input placeholder="Company" />
                                  <Input placeholder="Position" />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <Input type="date" placeholder="Start Date" />
                                  <Input type="date" placeholder="End Date" />
                                </div>
                                <Textarea placeholder="Job description and achievements..." rows={3} />
                              </div>
                            </Card>
                          ))}
                          <Button onClick={addExperience} variant="outline" className="w-full">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Experience
                          </Button>
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="education" className="space-y-4">
                      <ScrollArea className="h-96">
                        <div className="space-y-4">
                          {education.map((edu) => (
                            <Card key={edu.id} className="p-4">
                              <div className="space-y-3">
                                <Input placeholder="Institution" />
                                <div className="grid grid-cols-2 gap-3">
                                  <Input placeholder="Degree" />
                                  <Input placeholder="Field of Study" />
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                  <Input type="date" placeholder="Start" />
                                  <Input type="date" placeholder="End" />
                                  <Input placeholder="GPA (optional)" />
                                </div>
                              </div>
                            </Card>
                          ))}
                          <Button onClick={addEducation} variant="outline" className="w-full">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Education
                          </Button>
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="skills" className="space-y-4">
                      <ScrollArea className="h-96">
                        <div className="space-y-4">
                          {skills.map((skill) => (
                            <Card key={skill.id} className="p-4">
                              <div className="grid grid-cols-3 gap-3">
                                <Input placeholder="Skill name" className="col-span-2" />
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                  <option value="Beginner">Beginner</option>
                                  <option value="Intermediate">Intermediate</option>
                                  <option value="Advanced">Advanced</option>
                                  <option value="Expert">Expert</option>
                                </select>
                              </div>
                            </Card>
                          ))}
                          <Button onClick={addSkill} variant="outline" className="w-full">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Skill
                          </Button>
                        </div>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-7">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Live Preview
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      {Object.entries(deviceIcons).map(([device, Icon]) => (
                        <Button
                          key={device}
                          variant={previewDevice === device ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPreviewDevice(device as any)}
                        >
                          <Icon className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Resume Preview */}
                  <div className={`${deviceClasses[previewDevice]} bg-white border rounded-lg p-8 shadow-sm`}>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {personalInfo.fullName || 'Your Name'}
                      </h1>
                      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                        {personalInfo.email && (
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {personalInfo.email}
                          </div>
                        )}
                        {personalInfo.phone && (
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {personalInfo.phone}
                          </div>
                        )}
                        {personalInfo.location && (
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {personalInfo.location}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    {personalInfo.summary && (
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
                          Professional Summary
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {personalInfo.summary}
                        </p>
                      </div>
                    )}

                    {/* Experience */}
                    {experiences.length > 0 && (
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                          Work Experience
                        </h2>
                        <div className="space-y-4">
                          {experiences.map((exp) => (
                            <div key={exp.id}>
                              <div className="flex justify-between items-start mb-1">
                                <h3 className="font-medium text-gray-900">Position</h3>
                                <span className="text-sm text-gray-500">2020 - Present</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">Company Name</p>
                              <p className="text-sm text-gray-700">Job description and achievements...</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Education */}
                    {education.length > 0 && (
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                          Education
                        </h2>
                        <div className="space-y-3">
                          {education.map((edu) => (
                            <div key={edu.id}>
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium text-gray-900">Degree in Field</h3>
                                  <p className="text-sm text-gray-600">Institution Name</p>
                                </div>
                                <span className="text-sm text-gray-500">2016 - 2020</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {skills.length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                          Skills
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <Badge key={skill.id} variant="secondary">
                              Skill Name
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <Button variant="outline">
                      <Save className="w-4 h-4 mr-2" />
                      Save Draft
                    </Button>
                    <Button>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
