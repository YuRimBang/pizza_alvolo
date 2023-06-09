import "./css/MyPage.css";
import Header from "./components/Header";
import MyPageHeader from "./components/MyPageHeader";
import MyPageInfo from "./components/MyPageInfo";
import PurchaseHistory from "./PurchaseHistory";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <Routes>
          <Route path="/" element={<MyPageInfo></MyPageInfo>}></Route>
          <Route
            path="/purchasehistory"
            element={
              <PurchaseHistory orderInfo={purchaseHistory}></PurchaseHistory>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default MyPage;
