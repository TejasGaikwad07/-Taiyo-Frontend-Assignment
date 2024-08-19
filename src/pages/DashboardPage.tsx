import React from "react";
import LineChart from "../Components/dashboard/LineChart";
import Map from "../Components/dashboard/Map";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Charts and Maps</h1>
      <div className="mb-6">
        <LineChart />
      </div>
      <div className="h-96">
        <Map />
      </div>
    </div>
  );
};

export default DashboardPage;
