import { Link, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import axios from "axios";

import "../css/Header.css";

function Header({ isBoxVisible, setIsBoxVisible }) {
  const navigator = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  const [status, setStatus] = useState("/")

  useEffect(() => {
    // 페이지 로드 시 로그인 상태 복원
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    fetch("/logout", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          // 로그아웃 성공
          localStorage.removeItem("token");
          setIsLogin(false);
          alert("로그아웃 성공");
          navigator("/")
        } else {
          // 로그아웃 실패
          alert("로그아웃 실패");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  async function clickState(){
    console.log("왔음")
    try {
      const response = await axios.get("/clickStatus");
      
      console.log(response.data)
      setStatus(response.data);

      window.location.href = response.data;

    } catch (error) {
      console.error("마이페이지 실패:", error);
    }
  };

  return (
    <div className="web-main-tab-top">
      <div className="logo">
        <img
          src="/hamberger.png"
          className="web-icon-menu"
          alt="menu"
          onClick={handleClick}
        />
        <Link to="/">
          <img src="/logo.png" className="web-icon-logo" alt="logo" />
        </Link>
      </div>
      <div className="tab-top-middle">
        <Link to="/pizza">
          <span className="top-middle-text">피자</span>
        </Link>
        <span className="top-middle-text">스페셜반반피자</span>
        <span className="top-middle-text">세트</span>
        <span className="top-middle-text">사이드</span>
        <span className="top-middle-text">하프앤하프</span>
        <span className="top-middle-text">멤버십˙제휴할인</span>
        <span className="top-middle-text">이벤트</span>
      </div>
      <div className="tab-top-right">
        <div className="tab-text-img-layout">
          <div className="top-right-text-layout">
            {isLogin ? (
            <div>
                <span onClick={clickState} className="top-right-text"style={{ color: 'white' }}>마이페이지</span>
              <span className="top-right-text" onClick={handleLogout}style={{ color: 'white' }}>
                로그아웃
              </span>
            </div>
            ):(
              <Link to="/login">
                <span className="top-right-text"style={{ color: 'white' }}>로그인</span>
              </Link>
            )}
          </div>
          <Link to="/shopping">
            <img src="/pizza.png" className="icon-pizza" alt="pizza" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
