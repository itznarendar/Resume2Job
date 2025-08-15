import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Briefcase, 
  Eye, 
  Download, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  Star,
  Edit,
  BarChart3,
  Target
} from 'lucide-react';

const stats = [
  {
    title: 'Applications Sent',
    value: '24',
    change: '+12%',
    changeType: 'positive' as const,
    icon: Briefcase
  },
  {
    title: 'Profile Views',
    value: '156',
    change: '+8%',
    changeType: 'positive' as const,
    icon: Eye
  },
  {
    title: 'Interview Invites',
    value: '6',
    change: '+25%',
    changeType: 'positive' as const,
    icon: Users
  },
  {
    title: 'Response Rate',
    value: '32%',
    change: '-2%',
    changeType: 'negative' as const,
    icon: TrendingUp
  }
];

const recentApplications = [
  {
    id: '1',
    company: 'TechCorp Inc.',
    position: 'Senior Frontend Developer',
    status: 'Interview Scheduled',
    statusType: 'success' as const,
    appliedDate: '2024-01-15',
    nextStep: 'Technical Interview on Jan 20'
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Product Manager',
    status: 'Under Review',
    statusType: 'pending' as const,
    appliedDate: '2024-01-12',
    nextStep: 'Waiting for response'
  },
  {
    id: '3',
    company: 'DesignHub',
    position: 'UX Designer',
    status: 'Rejected',
    statusType: 'error' as const,
    appliedDate: '2024-01-10',
    nextStep: 'Application closed'
  }
];

const profileCompletion = {
  overall: 75,
  sections: [
    { name: 'Personal Info', completed: true },
    { name: 'Work Experience', completed: true },
    { name: 'Education', completed: true },
    { name: 'Skills', completed: false },
    { name: 'Portfolio', completed: false }
  ]
};

const upcomingEvents = [
  {
    id: '1',
    title: 'Technical Interview - TechCorp',
    date: '2024-01-20',
    time: '2:00 PM',
    type: 'interview'
  },
  {
    id: '2',
    title: 'Career Fair - Tech Hub',
    date: '2024-01-25',
    time: '10:00 AM',
    type: 'event'
  },
  {
    id: '3',
    title: 'Follow up - StartupXYZ',
    date: '2024-01-22',
    time: '9:00 AM',
    type: 'followup'
  }
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Track your job search progress and manage your applications</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Applications */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Applications</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplications.map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{app.position}</h3>
                            <p className="text-sm text-gray-600">{app.company}</p>
                            <p className="text-xs text-gray-500">Applied on {app.appliedDate}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={
                              app.statusType === 'success' ? 'default' :
                              app.statusType === 'pending' ? 'secondary' : 'destructive'
                            }
                          >
                            {app.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{app.nextStep}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Application Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">24</div>
                      <div className="text-sm text-gray-600">Total Applications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">6</div>
                      <div className="text-sm text-gray-600">Interviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">2</div>
                      <div className="text-sm text-gray-600">Offers</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Success Rate</span>
                      <span className="text-sm text-gray-600">32%</span>
                    </div>
                    <Progress value={32} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Completion */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Target className="w-5 h-5 mr-2" />
                    Profile Completion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-gray-600">{profileCompletion.overall}%</span>
                    </div>
                    <Progress value={profileCompletion.overall} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    {profileCompletion.sections.map((section, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{section.name}</span>
                        {section.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-gray-300" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Complete Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                          <p className="text-xs text-gray-600">{event.date} at {event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    View Calendar
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Update Resume
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Find Jobs
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Resume Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resume Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Views this month</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Downloads</span>
                      <span className="font-medium">23</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Match Score</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">85%</span>
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      </div>
                    </div>
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
