import React, { useState } from "react";
import SalesInfo from "./components/SalesInfo";
import "./css/OwnerPage.css";


function SalesHistory({ salesInfo }) {

  return (
    <div className="sales_info">
      <div className="sales_info_title">
        <div className="sales_info_title_text">
          판매 수량 확인
        </div>
      </div>
      {salesInfo.map((m) => (
        <SalesInfo salesInfoEach={m}></SalesInfo>
      ))}

    </div>
  );
}

export default SalesHistory;
