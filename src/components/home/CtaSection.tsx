import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to accelerate your growth?</h2>
            <p className="text-lg md:text-xl mb-8 text-primary-100">
              Whether you're looking for career guidance, skill development, or expert advice, our mentors are here to help you succeed.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-300 mr-3 flex-shrink-0" />
                <p>Get personalized 1:1 guidance from industry professionals</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-300 mr-3 flex-shrink-0" />
                <p>Learn practical skills and insights not found in courses</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-300 mr-3 flex-shrink-0" />
                <p>Expand your network and discover new opportunities</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-300 mr-3 flex-shrink-0" />
                <p>Flexible scheduling to fit your busy lifestyle</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="btn-lg bg-white text-primary-700 hover:bg-primary-50 focus:ring-white focus:ring-offset-primary-700 rounded-lg shadow-lg"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/explore" 
                className="btn-lg bg-primary-700 text-white hover:bg-primary-800 border border-primary-500 focus:ring-white rounded-lg"
              >
                Browse Mentors
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">What our mentees achieve</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-success-600 font-bold">87%</span>
                  </div>
                  <p>of mentees report significant career advancement within 6 months</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-success-600 font-bold">92%</span>
                  </div>
                  <p>say their mentor provided insights they couldn't find elsewhere</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-success-600 font-bold">3.5x</span>
                  </div>
                  <p>more likely to get a promotion after regular mentorship</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <p className="text-gray-600 italic">
                    "The ROI on my mentorship sessions has been incredible. I've doubled my salary in 18 months thanks to the strategic guidance."
                  </p>
                  <p className="mt-2 font-medium">— David K., Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;