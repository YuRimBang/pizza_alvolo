// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import Pizza from "./pizza";
import Shopping from "./shopping";
import MyPage from "./MyPage";
import Login from "./Login";
import PurchaseHistory from "./PurchaseHistory";
import axios from "axios";
import ReviewList from "./components/ReviewList"

function App() {
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
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route 
            path="/reviewList" 
            element={<ReviewList reviewInfo={reviewHistory}/>} />
          <Route
            path="/purchasehistory"
            element={<PurchaseHistory orderInfo={purchaseHistory} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
