import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/utils/LoadingSpinner';

function BookingPage() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book a Session with {username}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          Select your preferred time and date to schedule a session.
        </p>
        {/* Booking form will be implemented later */}
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-gray-500 text-sm">Booking functionality coming soon</p>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;