import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ExternalLink } from 'lucide-react';

// Sample mentor data (in a real app, this would come from API)
const mentors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    username: 'sarahj',
    title: 'Senior Product Designer at DesignCo',
    image: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    sessions: 124,
    price: 60,
    duration: 45,
    tags: ['UX Design', 'Product', 'Portfolio Review'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    username: 'michaelc',
    title: 'Full Stack Developer at TechFirm',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    sessions: 98,
    price: 75,
    duration: 60,
    tags: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 3,
    name: 'Aisha Patel',
    username: 'aishap',
    title: 'Marketing Director at GrowthAgency',
    image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    sessions: 156,
    price: 90,
    duration: 50,
    tags: ['Digital Marketing', 'Growth', 'SEO'],
  },
  {
    id: 4,
    name: 'James Wilson',
    username: 'jamesw',
    title: 'Data Scientist at AnalyticsPro',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    sessions: 87,
    price: 80,
    duration: 60,
    tags: ['Data Science', 'Machine Learning', 'Python'],
  },
];

const FeaturedMentors: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Mentors</h2>
          <p className="text-xl text-gray-600">Connect with some of our top-rated professionals who are ready to share their expertise and help you achieve your goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="card group">
              <div className="relative">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <Link to={`/profile/${mentor.username}`} className="text-white flex items-center font-medium hover:underline">
                    <span>View Profile</span>
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm font-medium">{mentor.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{mentor.title}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{mentor.duration} min</span>
                  </div>
                  <div className="text-primary-600 font-semibold">${mentor.price}</div>
                </div>
                <Link to={`/book/${mentor.username}`} className="mt-4 btn btn-primary btn-md w-full">
                  Book Session
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/explore" className="btn btn-secondary btn-lg">
            Explore All Mentors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;