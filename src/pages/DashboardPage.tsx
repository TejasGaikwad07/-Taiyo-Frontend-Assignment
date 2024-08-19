import React from "react";
import LineChart from "../Components/dashboard/LineChart";
import Map from "../Components/dashboard/Map";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Charts and Maps</h1>
      
      <div className="mb-6 w-full">
        <LineChart />
      </div>

      <div className="w-full h-96 md:h-[500px] lg:h-[600px]">
        <Map />
      </div>
    </div>
  );
};

export default DashboardPage;
