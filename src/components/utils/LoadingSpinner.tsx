import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  fullPage?: boolean;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  fullPage = false,
  text = 'Loading...'
}) => {
  const sizeClass = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
        <div className={`${sizeClass.lg} border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin`}></div>
        <p className="mt-4 text-primary-800 font-medium">{text}</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className={`${sizeClass[size]} border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin`}></div>
      {text && <p className="mt-2 text-gray-600 text-sm">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;