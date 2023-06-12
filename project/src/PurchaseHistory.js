import "./css/MyPage.css";
import Header from "./components/Header";
import MyPageHeader from "./components/MyPageHeader";
import OrderInfo from "./components/OrderInfo"
import MainUnder from './components/MainUnder';
import React, { useState } from "react";

function PurchaseHistory({ orderInfo }) {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  if (!orderInfo || orderInfo.length === 0) {
    return (
      <div>
        <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
        <div className="mypage">
          <MyPageHeader></MyPageHeader>
          <div className="my_order_info">
            <p className="noHistory">주문내역이 없습니다</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
        <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
      <div className="mypage">
        <MyPageHeader></MyPageHeader>
        <div className="my_order_info">
          {orderInfo.map((m) => (
            <OrderInfo orderInfoEach={m} key={m.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PurchaseHistory;
