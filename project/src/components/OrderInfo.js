import React, { useState, useEffect } from "react";
import "../css/OrderInfo.css";
import WriteReview from "./WriteReview";
import axios from "axios";
function OrderInfo({ orderInfoEach }) {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showWriteButton, setShowWriteButton] = useState(true);

  useEffect(() => {
    isReview();
  }, []);

  const isReview = async () => {
    const result = await axios.get(`/isReview/${orderInfoEach.pk}`);
    const userInfo = result.data[0];
    userInfo.review === 1
      ? setShowWriteButton(false)
      : setShowWriteButton(true);
  };

  const handleReviewButtonClick = () => {
    setShowWriteReview(true);
  };

  const handleRegisterButtonClick = () => {
    setShowWriteReview(false);
    setShowWriteButton(false);
  };

  const orderDate = new Date(orderInfoEach.orderDate);
  const formattedDate = `${orderDate.getFullYear()}-${(orderDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${orderDate
    .getDate()
    .toString()
    .padStart(2, "0")} ${orderDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${orderDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${orderDate.getSeconds().toString().padStart(2, "0")}`;

  return (
    <div className="order_info_list">
      <div className="order_info">
        <div className="info_name">주문일자</div>
        <div className="info">{formattedDate}</div>
      </div>
      <div className="order_info">
        <div className="info_name">주문메뉴</div>
        <div className="info">{orderInfoEach.menuName}</div>
      </div>
      <div className="order_info">
        <div className="info_name">결제금액</div>
        <div className="info">{orderInfoEach.price}</div>
      </div>
      <div className="order_info">
        <div className="info_name">배달지정보</div>
        <div className="info">
          {orderInfoEach.address} {orderInfoEach.addressDetail}
        </div>
      </div>
      <div className="order_info">
        <div className="info_name">주문매장</div>
        <div className="info">{orderInfoEach.name}</div>
        {showWriteButton && (
          <div className="button_container">
            <button className="review" onClick={handleReviewButtonClick}>
              후기작성
            </button>
          </div>
        )}
      </div>
      {showWriteReview && (
        <WriteReview
          onRegisterButtonClick={handleRegisterButtonClick}
          orderInfoEach={orderInfoEach}
        />
      )}
    </div>
  );
}

export default OrderInfo;