import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    content: "The mentorship I received through MentorConnect was invaluable. My mentor provided practical insights that helped me land my dream job in tech.",
    author: "Alex Rivera",
    position: "Frontend Developer",
    image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "I was stuck in my career and didn't know what to do next. My mentor helped me identify my strengths and create a clear path forward. Worth every penny!",
    author: "Jessica Chen",
    position: "Marketing Specialist",
    image: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "As someone trying to break into data science, the personalized guidance I received was exactly what I needed. My mentor helped me focus on the right skills.",
    author: "Raj Patel",
    position: "Data Analyst",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    content: "The session gave me clarity on my UX portfolio. With my mentor's feedback, I was able to showcase my work better and landed 3 interviews right away!",
    author: "Emma Thompson",
    position: "UX Designer",
    image: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Hear from people who have transformed their careers through MentorConnect.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-10">
                        <div className="flex justify-center mb-6">
                          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                            <Quote className="w-6 h-6 text-primary-600" />
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg md:text-xl text-center mb-8">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center justify-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                            <p className="text-gray-600 text-sm">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 md:-translate-x-6 bg-white rounded-full shadow-md p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 md:translate-x-6 bg-white rounded-full shadow-md p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          {/* Dots Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;