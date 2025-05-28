import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/utils/LoadingSpinner';

function ProfilePage() {
  const { username } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    // TODO: Fetch profile data
    setLoading(false);
  }, [username]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {username}'s Profile
          </h1>
          <div className="space-y-4">
            {/* Profile content will be populated once data fetching is implemented */}
            <p className="text-gray-600">Profile information coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;