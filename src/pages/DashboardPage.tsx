import React from 'react';
import { Routes, Route } from 'react-router-dom';

function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-600">Welcome to your dashboard!</p>
        </div>
      </div>
      
      <Routes>
        {/* Add nested dashboard routes here */}
        <Route index element={<div>Dashboard Home</div>} />
      </Routes>
    </div>
  );
}

export default DashboardPage;