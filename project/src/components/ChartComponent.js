import "../css/Chart.css";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";


const ChartComponent = () => {
  const labels = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/sales");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };
  
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "요일별 총 매출",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        data: data ? data.map((item) => item.totalSales || 0) : [],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
   <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
