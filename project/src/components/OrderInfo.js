import React, { useState } from "react";
import "../css/OrderInfo.css";
import WriteReview from "./WriteReview";

function OrderInfo({ orderInfoEach }) {
  const [showWriteReview, setShowWriteReview] = useState(false);

  const handleReviewButtonClick = () => {
    setShowWriteReview(true);
  };

  const handleRegisterButtonClick = () => {
    setShowWriteReview(false);
  };

  return (
    <div className="order_info_list">
      <div className="order_info">
        <div className="info_name">주문일자</div>
        <div className="info">{orderInfoEach.date}</div>
      </div>
      <div className="order_info">
        <div className="info_name">주문메뉴</div>
        <div className="info">{orderInfoEach.menu}</div>
      </div>
      <div className="order_info">
        <div className="info_name">결제금액</div>
        <div className="info">{orderInfoEach.price}</div>
      </div>
      <div className="order_info">
        <div className="info_name">배달지정보</div>
        <div className="info">{orderInfoEach.deliveryInfo}</div>
      </div>
      <div className="order_info">
        <div className="info_name">주문매장</div>
        <div className="info">{orderInfoEach.orderStore}</div>
        <div className="button_container">
          <button className="review" onClick={handleReviewButtonClick}>
            후기작성
          </button>
        </div>
      </div>
      {showWriteReview && (
        <WriteReview onRegisterButtonClick={handleRegisterButtonClick} />
      )}
    </div>
  );
}

export default OrderInfo;
