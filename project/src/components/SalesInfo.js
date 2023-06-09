import React, { useState } from "react";
import "../css/SalesInfo.css";


function SalesInfo({ salesInfoEach }) {

  return (
    <div className="sales_info">

      <div className="sales_info_content">
        <div className="sales_info">
          <div className="info_name">메뉴명</div>
          <div className="info">{salesInfoEach.menu}</div>
          <div className="info_name">판매수량</div>
          <div className="info">{salesInfoEach.cnt}</div>
        </div>
      </div>
    </div>
  );
}

export default SalesInfo;
