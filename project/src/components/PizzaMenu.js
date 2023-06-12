import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/PizzaMenu.css";

function PizzaMenu({ pizzaData, setPizzaData, totalItems, setTotalItems, pageSize, activeTab, currentPage, selectedOption, setTotalPages }) {
useEffect(() => {
    fetchPizzaData();
    setTotalPages(Math.ceil(totalItems / pageSize));
  }, [activeTab, currentPage, selectedOption]);

  const fetchPizzaData = async () => {
    try {
      let category;
      if (activeTab === 0) {
        category = "전체";
      } else if (activeTab === 1) {
        category = "장인";
      } else if (activeTab === 2) {
        category = "달인";
      } else if (activeTab === 3) {
        category = "명품";
      }

      const response = await axios.get("/pizza", {
        params: {
          category: category,
          op: selectedOption,
        },
      });

      let newData = [...response.data];

      setPizzaData(newData);
      setTotalItems(newData.length);
      setTotalPages(Math.ceil(newData.length / pageSize));
    } catch (error) {
      console.error("피자 메뉴 데이터를 불러오는데 실패했습니다:", error);
    }
  };

  const addPizza = async (pizza) => {
    const response = await axios.post("/shoppingPizza", null, {
      params: {
        menuPk: pizza.pk,
        price: pizza.price,
        cnt: 1,
      },
    });

    alert(response.data);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedPizzaData = pizzaData.slice(startIndex, endIndex);

  return (
    <div className="pizzaMenu">
      {displayedPizzaData.map((pizza, index) => {
        return (
          <div className="pizza_menu" key={index}>
            <div className="hiddenBox">
              <Link to={`/review/${pizza.pk}`}>
                <div className="detail">리뷰보기</div>
              </Link>
              <Link to="/shopping">
                <div onClick={() => addPizza(pizza)} className="min_shopping">
                  장바구니
                </div>
              </Link>
            </div>
            <div className="img">
              <img
                className="pizzaimg"
                src={`http://localhost:4000/${pizza.image}`}
                alt="피자 이미지"
              ></img>
            </div>
            <div className="menuexplan">
              <span className="name">{pizza.menuName}</span>
              <span className="explan">{pizza.tag}</span>
              <div className="size-price">
                <span className="size">{pizza.size}</span>
                <span className="price">{pizza.price}</span>
              </div>
              <div className="materialBox">
                {pizza.ingredient &&
                  pizza.ingredient.split(" ").map((ingredient, index) => (
                    <div className="material1" key={index}>
                      {ingredient}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PizzaMenu;

