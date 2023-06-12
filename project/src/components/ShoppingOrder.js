import axios from 'axios';
import React, { useState } from 'react';

import "../css/ShoppingOrder.css";

function ShoppingOrder({ setBasketData, setTotalPrice }) {
  const orderBtn = async () => {
    try {
      const response = await axios.post("/orderPizza", {
        storePk: 1
      });

      if (response.status === 200) {
        setBasketData([]);
        setTotalPrice(0);
      }
    } catch (error) {
      console.error("주문 실패", error);
    }
  };

  return (
    <div className='orderbox'>
      <div onClick={orderBtn} className="total_order">
        주문하기
      </div>
    </div>

  );
}

export default ShoppingOrder;
