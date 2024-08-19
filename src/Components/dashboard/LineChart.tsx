import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

// Define the type for historical data
interface HistoricalData {
  cases: Record<string, number>;
}

// Fetch historical data from API
const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const response = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.data;
};

/**
 * LineChart component for displaying a line chart of historical COVID-19 data.
 * Uses React Query for data fetching.
 */
const LineChart = () => {
  const { data, isLoading, error } = useQuery<HistoricalData>({
    queryKey: ["historicalData"],
    queryFn: fetchHistoricalData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const chartData = {
    labels: Object.keys(data?.cases || {}),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data?.cases || {}),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
