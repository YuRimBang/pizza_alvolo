import "../css/Chart.css";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const ChartComponent = () => {
  const labels = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
  const [data, setData] = useState(null);
  const [inputDate, setInputDate] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/sales", { params: { date: inputDate } });
      setData(response.data);
  
      // 데이터 받아온 후에 dayOfWeek와 labels를 비교하여 데이터를 정렬
      const sortedData = [];
      for (const label of labels) {
        const item = response.data.find((dataItem) => dataItem.dayOfWeek === label);
        if (item) {
          sortedData.push(item);
        } else {
          sortedData.push({ dayOfWeek: label, totalSales: 0 });
        }
      }
      setData(sortedData);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };
  

  const handleDateChange = (e) => {
    setInputDate(e.target.value);
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
      <input type="date" value={inputDate} onChange={handleDateChange} /> 
      <button onClick={fetchData}>Get Sales</button> 
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;