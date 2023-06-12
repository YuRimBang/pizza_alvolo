import SalesInfo from "./components/SalesInfo";
import "./css/OwnerPage.css";
import ChartComponent from "./components/ChartComponent"; 
import Header from "./components/Header";
import MainUnder from './components/MainUnder';
import OwnerPageHeader from "./components/OwnerPageHeader";
import React, { useState } from "react";

function SalesHistory({ salesInfo }) {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  return (
    
    <div>
      <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
      <OwnerPageHeader />
      <div className="sales_info">
      <div className="sales_info_title">
        <div className="sales_info_title_text">
          판매 수량 확인
        </div>
      </div>
      {salesInfo.map((m) => (
        <SalesInfo salesInfoEach={m}></SalesInfo>
      ))}
      <div className="chart-container"> 
        <ChartComponent />
      </div>
      </div>

    </div>

    

  );
  
}

export default SalesHistory;
