import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Heart, 
  Filter,
  Building,
  Users,
  Star,
  ExternalLink
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  logo?: string;
  featured?: boolean;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    posted: '2 days ago',
    description: 'We are looking for a passionate Senior Frontend Developer to join our growing team...',
    requirements: ['React', 'TypeScript', 'Node.js', '5+ years experience'],
    benefits: ['Health Insurance', 'Remote Work', '401k'],
    featured: true
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $110,000',
    posted: '1 week ago',
    description: 'Join our design team to create beautiful and intuitive user experiences...',
    requirements: ['Figma', 'Adobe Creative Suite', '3+ years experience'],
    benefits: ['Flexible Hours', 'Health Insurance', 'Learning Budget']
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'StartupXYZ',
    location: 'Remote',
    type: 'Remote',
    salary: '$100,000 - $130,000',
    posted: '3 days ago',
    description: 'Lead product strategy and work with cross-functional teams...',
    requirements: ['Product Management', 'Data Analysis', 'Agile'],
    benefits: ['Equity', 'Remote Work', 'Unlimited PTO']
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $140,000',
    posted: '5 days ago',
    description: 'Apply machine learning and statistical analysis to drive business insights...',
    requirements: ['Python', 'Machine Learning', 'SQL', 'PhD preferred'],
    benefits: ['Health Insurance', 'Gym Membership', 'Conference Budget']
  },
  {
    id: '5',
    title: 'Marketing Manager',
    company: 'GrowthCo',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$80,000 - $100,000',
    posted: '1 week ago',
    description: 'Drive marketing campaigns and brand awareness initiatives...',
    requirements: ['Digital Marketing', 'SEO/SEM', 'Analytics', '4+ years experience'],
    benefits: ['Health Insurance', 'Paid Time Off', 'Professional Development']
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    posted: '4 days ago',
    description: 'Manage cloud infrastructure and deployment pipelines...',
    requirements: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    benefits: ['Stock Options', 'Health Insurance', 'Learning Budget']
  }
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = !jobTypeFilter || job.type === jobTypeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Search</h1>
            <p className="text-gray-600">Find your next opportunity from thousands of job listings</p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search jobs, companies, keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Location"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-600">
                  {filteredJobs.length} jobs found
                </p>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-blue-200 bg-blue-50/30' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-lg">{job.title}</CardTitle>
                            {job.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {job.salary}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.posted}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSaveJob(job.id)}
                        className={savedJobs.includes(job.id) ? 'text-red-500' : 'text-gray-400'}
                      >
                        <Heart className={`w-4 h-4 ${savedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-gray-900 mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Job Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Job Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Get notified when new jobs matching your criteria are posted.
                  </p>
                  <Button className="w-full">
                    Create Job Alert
                  </Button>
                </CardContent>
              </Card>

              {/* Saved Jobs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Saved Jobs ({savedJobs.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {savedJobs.length > 0 ? (
                    <div className="space-y-3">
                      {savedJobs.slice(0, 3).map(jobId => {
                        const job = mockJobs.find(j => j.id === jobId);
                        return job ? (
                          <div key={jobId} className="flex items-center space-x-3 p-2 border rounded-md">
                            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                              <Building className="w-4 h-4 text-gray-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{job.title}</p>
                              <p className="text-xs text-gray-500 truncate">{job.company}</p>
                            </div>
                          </div>
                        ) : null;
                      })}
                      {savedJobs.length > 3 && (
                        <Button variant="outline" size="sm" className="w-full">
                          View All Saved Jobs
                        </Button>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No saved jobs yet</p>
                  )}
                </CardContent>
              </Card>

              {/* Career Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Career Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-md">
                      <h4 className="font-medium text-sm mb-1">Optimize Your Resume</h4>
                      <p className="text-xs text-gray-600">Tailor your resume for each application</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-md">
                      <h4 className="font-medium text-sm mb-1">Interview Preparation</h4>
                      <p className="text-xs text-gray-600">Practice common interview questions</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-md">
                      <h4 className="font-medium text-sm mb-1">Network Building</h4>
                      <p className="text-xs text-gray-600">Connect with industry professionals</p>
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
