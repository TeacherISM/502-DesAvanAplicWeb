/* eslint-disable react-refresh/only-export-components */

import React from "react";
import withAuth from "./withAuth";
import { useUser } from "./UserContext";
import TravelRequestList from "./TravelRequestList";

const Dashboard: React.FC = () => {
  const { role } = useUser();

  if (!role) {
    return (
      <div className="p-8 text-red-600">
        No role detected. Please log in again.
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-sm text-gray-500">Logged in as: <strong>{role}</strong></p>

      {/* Employee View */}
      {role === "employee" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Your Travel Requests</h2>
          <TravelRequestList />
          <h2 className="text-xl font-semibold">Your Expenses</h2>
          <p className="text-gray-600">No expenses submitted yet.</p>
        </div>
      )}

      {/* Manager View */}
      {role === "manager" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Pending Travel Requests</h2>
          <TravelRequestList />
          <h2 className="text-xl font-semibold">Expense Approvals</h2>
          <p className="text-gray-600">You have 2 expenses to review.</p>
        </div>
      )}

      {/* Admin View */}
      {role === "admin" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">User Management</h2>
          <p className="text-gray-600">Create, update, or remove users from the system.</p>

          <h2 className="text-xl font-semibold">System Settings</h2>
          <p className="text-gray-600">Configure system-wide settings and policies.</p>
        </div>
      )}
    </div>
  );
};

export default withAuth(Dashboard);
