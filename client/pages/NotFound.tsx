import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, FileText } from 'lucide-react';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-gray-400">404</span>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
              <p className="text-gray-600 mb-8">
                Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
              </p>
              
              <div className="space-y-3">
                <Link to="/" className="block">
                  <Button className="w-full">
                    <Home className="w-4 h-4 mr-2" />
                    Go to Homepage
                  </Button>
                </Link>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/jobs">
                    <Button variant="outline" className="w-full">
                      <Search className="w-4 h-4 mr-2" />
                      Find Jobs
                    </Button>
                  </Link>
                  
                  <Link to="/resume">
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Build Resume
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
