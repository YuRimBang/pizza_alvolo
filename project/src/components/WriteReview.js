import "../css/WriteReview.css";
import React, { useState } from "react";

function WriteReview({ onRegisterButtonClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["1", "2", "3", "4", "5"];

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleRegisterButton = () => {
    onRegisterButtonClick();
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
        <input type="text"></input>
      </div>
      <div className="regist_button_container">
        <button className="regist_button" onClick={handleRegisterButton}>
          등록
        </button>
      </div>
    </div>
  );
}

export default WriteReview;
