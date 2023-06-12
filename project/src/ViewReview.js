import "../src/css/ViewReview.css";
import Header from "./components/Header";
import MainUnder from './components/MainUnder';
import ReviewList from "./components/ReviewList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewReview() {
  const [reviewPizzaInfo, setReviewPizzaInfo] = useState({});
  const [review, setReview] = useState([]);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const { pizzaPk } = useParams();

  console.log(pizzaPk);
  useEffect(() => {
    selectReviewPizzaInfo();
    selectReview();
  }, []);

  const selectReviewPizzaInfo = async () => {
    try {
      const response = await axios.get(`/reviewPizzaInfo/${pizzaPk}`);
      const reviewPizzaInfo = response.data[0];
      setReviewPizzaInfo(reviewPizzaInfo);
    } catch (error) {
      console.error("피자 정보를 가져오는데 실패했습니다:", error);
    }
  };

  const selectReview = async () => {
    try {
      const response = await axios.get(`/review/${pizzaPk}`);
      const review = response.data;
      setReview(review);
    } catch (error) {
      console.error("리뷰를 가져오는데 실패했습니다:", error);
    }
  };

  return (
    <div>
      <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
      <div className="viewReview">
        <div className="pizza_info">
          <div className="pizza_image">
          <img
            src={`http://localhost:4000/${reviewPizzaInfo.image}`}
            alt="Pizza Image"
          />
          </div>
          <div className="pizza_detail_info">
            <div className="pizza_name">{reviewPizzaInfo.menuName}</div>
            <div className="pizza_engName">{reviewPizzaInfo.engName}</div>
            <div className="pizza_price_info">
              <span className="pizza_size">{reviewPizzaInfo.size}</span>
              <span className="pizza_price">{reviewPizzaInfo.price}</span>
            </div>
          </div>
        </div>
        <div className="pizza_review">
          <div className="pizza_review_col">
            <div className="rate">별점</div>
            <div className="info">리뷰</div>
            <div className="writer">작성자</div>
          </div>
          <div>
            <ReviewList reviewInfo={review}></ReviewList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReview;
