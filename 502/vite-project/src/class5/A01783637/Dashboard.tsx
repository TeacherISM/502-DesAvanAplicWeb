/* eslint-disable react-refresh/only-export-components */

import React from "react";
import withAuth from "./withAuth";
import TravelRequestList from "./TravelRequestList";

const Dashboard: React.FC = () => (
  <div className="space-y-6 p-8">
    <h1 className="text-3xl font-semibold">Dashboard</h1>
    <h2 className="text-xl font-medium">Travel Requests</h2>
    <TravelRequestList />
  </div>
);

export default withAuth(Dashboard);
