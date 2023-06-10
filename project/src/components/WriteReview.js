import "../css/WriteReview.css";
import React, { useState } from "react";

function WriteReview({ onRegisterButtonClick, orderInfoEach }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviewInfo, setReviewInfo] = useState("");
  const [isReviewEmpty, setIsReviewEmpty] = useState(true);

  const images = ["1", "2", "3", "4", "5"];

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleInputChange = (e) => {
    setReviewInfo(e.target.value);
    setIsReviewEmpty(e.target.value.trim() === "");
  };

  const handleRegisterButton = () => {
    if (!isReviewEmpty) {
      submitReview();
      onRegisterButtonClick();
      alert("후기가 작성되었습니다.");
    }
  };

  const submitReview = () => {
    const post = {
      orderProductPk: orderInfoEach.pk,
      content: reviewInfo,
      rate: currentImageIndex + 1,
    };

    fetch("/review", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        setReviewInfo(json.text);
      });
  };

  return (
    <div className="review_container">
      <div className="rating">
        <img
          className="rating_img"
          src={`./img/${images[currentImageIndex]}star.png`}
          alt={`Image ${currentImageIndex}`}
          onClick={changeImage}
        />
      </div>
      <div className="review_context">
        <input value={reviewInfo} onChange={handleInputChange} required></input>
      </div>
      <div className="regist_button_container">
        <button
          className="regist_button"
          onClick={handleRegisterButton}
          disabled={isReviewEmpty}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default WriteReview;
