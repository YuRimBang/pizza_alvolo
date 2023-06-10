import React from "react";
import "../css/ReviewList.css";

function ReviewList({ reviewInfo }) {
  return (
    <div className="review_list">
      {reviewInfo.map((review) => (
        <div className="review_item">
          <div className="rate">
            <img src={`/img/${review.rate}star.png`} alt="star" />
          </div>
          <div className="info">{review.content}</div>
          <div className="writer">{review.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
