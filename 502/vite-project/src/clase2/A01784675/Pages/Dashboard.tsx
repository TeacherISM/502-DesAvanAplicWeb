import React from 'react';
import TravelRequestForm from './TravelRequestForm';

type DashboardProps = {
  role: 'admin' | 'manager' | 'employee';
};

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const renderContent = () => {
    switch (role) {
      case 'admin':
        return (
          <div>
            <p className="text-lg text-red-600 mb-2">Admin: Manage users and settings</p>
            <ul className="list-disc pl-5">
              <li>User: alice@example.com</li>
              <li>User: bob@example.com</li>
              <li>User: charlie@example.com</li>
            </ul>
          </div>
        );
      case 'manager':
        return (
          <div>
            <p className="text-lg text-blue-600 mb-2">Manager: Review travel requests</p>
            <ul className="space-y-2">
              <li className="bg-gray-100 p-2 rounded">
                Destination: Tokyo — <button className="bg-green-500 text-white px-2 rounded">Approve</button> <button className="bg-red-500 text-white px-2 rounded">Reject</button>
              </li>
              <li className="bg-gray-100 p-2 rounded">
                Destination: Paris — <button className="bg-green-500 text-white px-2 rounded">Approve</button> <button className="bg-red-500 text-white px-2 rounded">Reject</button>
              </li>
            </ul>
          </div>
        );
      case 'employee':
      default:
        return (
          <div>
            <p className="text-lg text-green-600 mb-2">Employee: Submit travel and expense forms</p>
            <TravelRequestForm />
          </div>
        );
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard ({role})</h1>
      {renderContent()}
    </div>
  );
};

export default Dashboard;
