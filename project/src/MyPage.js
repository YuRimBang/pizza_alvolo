import "./css/MyPage.css";
import Header from "./components/Header";
import MainUnder from './components/MainUnder';
import MyPageHeader from "./components/MyPageHeader";
import MyPageInfo from "./components/MyPageInfo";
import React, { useState } from "react";

function MyPage() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  return (
    <div>
       <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
      <div className="mypage">
        <MyPageHeader></MyPageHeader>
        <MyPageInfo></MyPageInfo>
      </div>
    </div>
  );
}

export default MyPage;
