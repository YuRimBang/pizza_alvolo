import React, { useState } from "react";
import '../css/SalesInfo.css';


function SalesInfo() {
    // Example data for menu items with sales quantity
    const menuItems = [
      { id: 1, name: "Menu 1", sales: 10 },
      { id: 2, name: "Menu 2", sales: 5 },
      { id: 3, name: "Menu 3", sales: 15 },
    ];
  
    // State to hold the sales quantity for each menu item
    const [salesQuantity, setSalesQuantity] = useState(menuItems);

    
  return (
    <div className="sales_info">
      
      <div className="sales_info_title">
        <div className="sales_info_title_text">
          판매 수량 확인
        </div>
      </div>

      <div className="sales_info_content">
        {salesQuantity.map((item) => (
            <div key={item.id} className="menu_item">
              <div className="menu_name">{item.name}</div>
              <div className="menu_sales">{item.sales} 개</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SalesInfo;
