import { useState, useEffect } from "react";
import "../css/ShoppingBasket.css";
import axios from "axios";

function ShoppingBasket({ basketData, setBasketData, totalPrice, setTotalPrice }) {
  useEffect(() => {
    fetchBasketData();
  }, []);

  const fetchBasketData = async () => {
    try {
      const response = await axios.get("/shopping");
      setBasketData(response.data);
      calculateTotalPrice(response.data);
    } catch (error) {
      console.error("장바구니 데이터를 불러오는데 실패했습니다:", error);
    }
  };

  const calculateTotalPrice = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.cnt;
    });
    setTotalPrice(total);
  };

  const handleQuantityChange = async (item, index, operation) => {
    try {
      if (operation === "increase") {
        const response = await axios.post("/changeCnt", {
          menuName: item.menuName,
          cnt: item.cnt + 1,
        });
        const updatedData = basketData.map((basketItem, basketIndex) => {
          if (basketIndex === index) {
            return { ...basketItem, cnt: basketItem.cnt + 1 };
          }
          return basketItem;
        });
        setBasketData(updatedData);
        calculateTotalPrice(updatedData);
      } else if (operation === "decrease" && item.cnt > 1) {
        const response = await axios.post("/changeCnt", {
          menuName: item.menuName,
          cnt: item.cnt - 1,
        });
        const updatedData = basketData.map((basketItem, basketIndex) => {
          if (basketIndex === index) {
            return { ...basketItem, cnt: basketItem.cnt - 1 };
          }
          return basketItem;
        });
        setBasketData(updatedData);
        calculateTotalPrice(updatedData);
      }
    } catch (error) {
      console.error("장바구니 데이터를 불러오는데 실패했습니다:", error);
    }
  };

  const cancelItem = async (item) => {
    console.log(item)
    try {
      await axios.post("/shoppingCancel", {
        menuName : item.menuName
      });
      const updatedData = basketData.filter((basketItem) => basketItem !== item);
      setBasketData(updatedData);
      calculateTotalPrice(updatedData);
    } catch (error) {
      console.error("장바구니 삭제 실패했습니다:", error);
    }
  };
  
  return (
    <div className="shoppingBasket">
      <ul className="shoppingPizza">
        {basketData.map((item, index) => (
          <li className="shopping" key={index}>
            <img
              className="shopping_pizza_img"
              src={`http://localhost:4000/${item.image}`}
              alt="피자"
            />
            <div className="shopping_pizza">
              <div className="shopping_pizza_name">{item.menuName}</div>
              <div className="shopping_pizza_size">{`${item.size}, 일반도우`}</div>
              <div className="shopping_option">옵션변경</div>
            </div>
            <div className="shopping_pizza_cnt">
              <input
                className="shopping_cnt_minus"
                type="button"
                value="-"
                onClick={() => handleQuantityChange(item, index, "decrease")}
              />
              <span className="shopping_pizza_total_cnt">{item.cnt}</span>
              <input
                className="shopping_cnt_plus"
                type="button"
                value="+"
                onClick={() => handleQuantityChange(item, index, "increase")}
                />
              </div>
              <div className="shopping_pizza_menu_price">
                <span className="shopping_pizza_menu_total_price">
                  {item.price * item.cnt}
                </span>
                <span className="shopping_menu_won">원</span>
              </div>
              <div className="shopping_change">
                <div className="shopping_change_btn">변경저장</div>
              </div>
              <div className="shopping_cancel">
                <input
                  onClick={() => cancelItem(item)}
                  className="shopping_cancle_btn"
                  type="button"
                  value="X"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="total_main">
          <span className="total_amount">합계</span>
          <span className="total_sum">총</span>
          <span className="total_price">{totalPrice}</span>
          <span className="total_won">원</span>
        </div>
      </div>
    );
  }
  
  export default ShoppingBasket;
  
