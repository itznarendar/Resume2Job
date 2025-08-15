import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Clock, 
  ExternalLink,
  Edit,
  Trash2,
  Plus,
  Eye,
  Download,
  Mail,
  Phone
} from 'lucide-react';

interface Application {
  id: string;
  company: string;
  position: string;
  location: string;
  appliedDate: string;
  status: 'Applied' | 'Under Review' | 'Interview Scheduled' | 'Interview Completed' | 'Offer' | 'Rejected' | 'Withdrawn';
  statusCategory: 'active' | 'interview' | 'completed';
  salary?: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  nextStep?: string;
  notes?: string;
  contactPerson?: string;
  contactEmail?: string;
  jobUrl?: string;
  priority: 'High' | 'Medium' | 'Low';
}

const mockApplications: Application[] = [
  {
    id: '1',
    company: 'TechCorp Inc.',
    position: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    appliedDate: '2024-01-15',
    status: 'Interview Scheduled',
    statusCategory: 'interview',
    salary: '$120,000 - $150,000',
    jobType: 'Full-time',
    nextStep: 'Technical Interview on Jan 20, 2:00 PM',
    contactPerson: 'Sarah Johnson',
    contactEmail: 'sarah.johnson@techcorp.com',
    priority: 'High',
    notes: 'Great company culture, excited about the role'
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Product Manager',
    location: 'Remote',
    appliedDate: '2024-01-12',
    status: 'Under Review',
    statusCategory: 'active',
    salary: '$100,000 - $130,000',
    jobType: 'Remote',
    nextStep: 'Waiting for HR response',
    priority: 'Medium',
    notes: 'Applied through LinkedIn'
  },
  {
    id: '3',
    company: 'DesignHub',
    position: 'UX Designer',
    location: 'New York, NY',
    appliedDate: '2024-01-10',
    status: 'Rejected',
    statusCategory: 'completed',
    salary: '$90,000 - $110,000',
    jobType: 'Full-time',
    priority: 'Low',
    notes: 'Not a good culture fit according to feedback'
  },
  {
    id: '4',
    company: 'Analytics Pro',
    position: 'Data Scientist',
    location: 'Austin, TX',
    appliedDate: '2024-01-08',
    status: 'Offer',
    statusCategory: 'completed',
    salary: '$110,000 - $140,000',
    jobType: 'Full-time',
    nextStep: 'Need to respond by Jan 25',
    contactPerson: 'Mike Chen',
    contactEmail: 'mike.chen@analyticspro.com',
    priority: 'High',
    notes: 'Great offer! Need to negotiate vacation days'
  },
  {
    id: '5',
    company: 'CloudTech',
    position: 'DevOps Engineer',
    location: 'Seattle, WA',
    appliedDate: '2024-01-05',
    status: 'Interview Completed',
    statusCategory: 'interview',
    salary: '$130,000 - $160,000',
    jobType: 'Full-time',
    nextStep: 'Waiting for final decision',
    priority: 'High',
    notes: 'Technical interview went well'
  }
];

const statusColors = {
  'Applied': 'bg-blue-100 text-blue-800',
  'Under Review': 'bg-yellow-100 text-yellow-800',
  'Interview Scheduled': 'bg-purple-100 text-purple-800',
  'Interview Completed': 'bg-indigo-100 text-indigo-800',
  'Offer': 'bg-green-100 text-green-800',
  'Rejected': 'bg-red-100 text-red-800',
  'Withdrawn': 'bg-gray-100 text-gray-800'
};

const priorityColors = {
  'High': 'bg-red-100 text-red-800',
  'Medium': 'bg-yellow-100 text-yellow-800',
  'Low': 'bg-green-100 text-green-800'
};

export default function Applications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || app.status === statusFilter;
    const matchesPriority = !priorityFilter || app.priority === priorityFilter;
    const matchesTab = selectedTab === 'all' || app.statusCategory === selectedTab;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesTab;
  });

  const getTabCount = (category: string) => {
    if (category === 'all') return mockApplications.length;
    return mockApplications.filter(app => app.statusCategory === category).length;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Tracker</h1>
              <p className="text-gray-600">Manage and track all your job applications</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Application
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search applications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Statuses</SelectItem>
                    <SelectItem value="Applied">Applied</SelectItem>
                    <SelectItem value="Under Review">Under Review</SelectItem>
                    <SelectItem value="Interview Scheduled">Interview Scheduled</SelectItem>
                    <SelectItem value="Interview Completed">Interview Completed</SelectItem>
                    <SelectItem value="Offer">Offer</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Priorities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Priorities</SelectItem>
                    <SelectItem value="High">High Priority</SelectItem>
                    <SelectItem value="Medium">Medium Priority</SelectItem>
                    <SelectItem value="Low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
            <TabsList>
              <TabsTrigger value="all">
                All Applications ({getTabCount('all')})
              </TabsTrigger>
              <TabsTrigger value="active">
                Active ({getTabCount('active')})
              </TabsTrigger>
              <TabsTrigger value="interview">
                Interviews ({getTabCount('interview')})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({getTabCount('completed')})
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTab} className="mt-6">
              {/* Applications List */}
              <div className="space-y-4">
                {filteredApplications.map((app) => (
                  <Card key={app.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{app.position}</h3>
                            <Badge className={statusColors[app.status]}>
                              {app.status}
                            </Badge>
                            <Badge className={priorityColors[app.priority]}>
                              {app.priority}
                            </Badge>
                          </div>
                          <p className="text-blue-600 font-medium mb-2">{app.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {app.location}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {app.jobType}
                            </div>
                            {app.salary && (
                              <div className="flex items-center">
                                <span className="mr-1">💰</span>
                                {app.salary}
                              </div>
                            )}
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              Applied {app.appliedDate}
                            </div>
                          </div>
                          
                          {app.nextStep && (
                            <div className="bg-blue-50 p-3 rounded-md mb-3">
                              <p className="text-sm text-blue-800">
                                <Clock className="w-4 h-4 inline mr-2" />
                                Next: {app.nextStep}
                              </p>
                            </div>
                          )}
                          
                          {app.notes && (
                            <div className="bg-gray-50 p-3 rounded-md mb-3">
                              <p className="text-sm text-gray-700">{app.notes}</p>
                            </div>
                          )}
                          
                          {app.contactPerson && (
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Contact: </span>
                              {app.contactPerson}
                              {app.contactEmail && (
                                <span className="ml-2">
                                  <Mail className="w-3 h-3 inline mr-1" />
                                  {app.contactEmail}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          {app.jobUrl && (
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Job Post
                            </Button>
                          )}
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {filteredApplications.length === 0 && (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
                      <p className="text-gray-600 mb-4">
                        {searchTerm || statusFilter || priorityFilter
                          ? 'Try adjusting your filters to see more results.'
                          : 'Start tracking your job applications by adding your first application.'}
                      </p>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Your First Application
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Export Actions */}
          {filteredApplications.length > 0 && (
            <div className="flex justify-center mt-8">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export to CSV
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
