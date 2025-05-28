import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Briefcase, TrendingUp, Palette, Database, BookOpen, BarChart, HeartPulse } from 'lucide-react';

// Sample categories data
const categories = [
  {
    id: 1,
    name: 'Software Development',
    count: 450,
    icon: <Code className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-600',
    slug: 'software-development'
  },
  {
    id: 2,
    name: 'Business & Career',
    count: 325,
    icon: <Briefcase className="w-6 h-6" />,
    color: 'bg-purple-100 text-purple-600',
    slug: 'business-career'
  },
  {
    id: 3,
    name: 'Marketing & Growth',
    count: 280,
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-green-100 text-green-600',
    slug: 'marketing-growth'
  },
  {
    id: 4,
    name: 'Design & Creativity',
    count: 210,
    icon: <Palette className="w-6 h-6" />,
    color: 'bg-pink-100 text-pink-600',
    slug: 'design-creativity'
  },
  {
    id: 5,
    name: 'Data Science',
    count: 195,
    icon: <Database className="w-6 h-6" />,
    color: 'bg-yellow-100 text-yellow-600',
    slug: 'data-science'
  },
  {
    id: 6,
    name: 'Education & Academia',
    count: 150,
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-red-100 text-red-600',
    slug: 'education-academia'
  },
  {
    id: 7,
    name: 'Finance & Investing',
    count: 135,
    icon: <BarChart className="w-6 h-6" />,
    color: 'bg-indigo-100 text-indigo-600',
    slug: 'finance-investing'
  },
  {
    id: 8,
    name: 'Health & Wellness',
    count: 120,
    icon: <HeartPulse className="w-6 h-6" />,
    color: 'bg-teal-100 text-teal-600',
    slug: 'health-wellness'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore by Category</h2>
          <p className="text-xl text-gray-600">Find mentors in various industries and specializations who can guide you in your specific field.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 group animate-fade-in"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {category.count} mentors
              </p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/categories" className="btn btn-secondary btn-lg">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;