import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Calendar, Award, ArrowRight } from 'lucide-react';
import FeaturedMentors from '../components/home/FeaturedMentors';
import Testimonials from '../components/home/Testimonials';
import Categories from '../components/home/Categories';
import HowItWorks from '../components/home/HowItWorks';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-20 pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connect with industry experts who can help you grow
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-100">
                Book 1:1 sessions, consultations, and mentorship with professionals 
                across various fields. Get personalized guidance on your terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className="btn-lg bg-white text-primary-700 hover:bg-primary-50 focus:ring-white focus:ring-offset-primary-700 rounded-lg shadow-lg"
                >
                  Find a Mentor
                </Link>
                <Link 
                  to="/register?professional=true" 
                  className="btn-lg bg-primary-700 text-white hover:bg-primary-800 border border-primary-500 focus:ring-white rounded-lg"
                >
                  Become a Mentor
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl transform rotate-1 animate-fade-in">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Mentor" 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="text-gray-900 font-medium">Sarah Johnson</h3>
                    <p className="text-gray-600 text-sm">Product Designer at DesignCo</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">45-min Product Review</span>
                    <span className="font-medium text-gray-900">$60</span>
                  </div>
                  <button className="w-full btn-primary btn-md mt-3">Book Session</button>
                </div>
              </div>
              <div className="relative z-20 bg-white p-6 rounded-xl shadow-xl transform -rotate-2 translate-y-12 -translate-x-12 animate-fade-in animation-delay-100">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Mentor" 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="text-gray-900 font-medium">Michael Chen</h3>
                    <p className="text-gray-600 text-sm">Senior Developer at TechFirm</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">60-min Code Review</span>
                    <span className="font-medium text-gray-900">$75</span>
                  </div>
                  <button className="w-full btn-primary btn-md mt-3">Book Session</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">2,500+</p>
              <p className="text-gray-600">Expert Mentors</p>
            </div>
            <div className="animate-fade-in animation-delay-100">
              <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">15,000+</p>
              <p className="text-gray-600">Sessions Completed</p>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</p>
              <p className="text-gray-600">Industries</p>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4.8/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why choose MentorConnect?</h2>
            <p className="text-xl text-gray-600">Our platform connects you with vetted professionals who are passionate about sharing their knowledge and expertise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all animate-fade-in">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find the perfect match</h3>
              <p className="text-gray-600">Browse profiles of industry experts and find someone who matches your specific needs and goals.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all animate-fade-in animation-delay-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy scheduling</h3>
              <p className="text-gray-600">Book sessions at times that work for you with our intuitive calendar system and automated reminders.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all animate-fade-in animation-delay-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized sessions</h3>
              <p className="text-gray-600">Get tailored advice and insights specific to your situation, not generic information.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register" className="btn btn-primary btn-lg inline-flex items-center">
              <span>Explore All Features</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* How It Works */}
      <HowItWorks />

      {/* Featured Mentors */}
      <FeaturedMentors />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default HomePage;