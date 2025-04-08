import React from 'react';
import Counter from '../components/Counter';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-blue-700">Welcome to the Dashboard 🎉</h1>
      <Counter />
    </div>
  );
};

export default Dashboard;
