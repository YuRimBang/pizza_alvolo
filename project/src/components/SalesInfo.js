import React, { useState } from "react";
import "../css/SalesInfo.css";

function SalesInfo({ salesInfoEach }) {
  return (
    <div className="sales_info">
      <table className="sales_info_table">
        <thead>
          <tr>
            <th>메뉴명</th>
            <th>판매수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{salesInfoEach.menuName}</td>
            <td>{salesInfoEach.cnt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesInfo;
