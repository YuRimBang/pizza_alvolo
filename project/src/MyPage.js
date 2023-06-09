import "./css/MyPage.css";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MyPageHeader from "./components/MyPageHeader";
import MyPageInfo from "./components/MyPageInfo"
import PurchaseHistory from "./PurchaseHistory";

function MyPage() {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    selectPurchaseHistory();
  }, []);

  const selectPurchaseHistory = async () => {
    const result = await axios.get("/purchaseHistory");
    const purchaseHistory = result.data;
    setPurchaseHistory(purchaseHistory);
  };

  return (
    <div>
      <Header></Header>
      <div className="mypage">
        <MyPageHeader></MyPageHeader>
        <MyPageInfo></MyPageInfo>
      </div>
    </div>
  );
}

export default MyPage;
