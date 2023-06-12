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
import ViewReview from "./ViewReview";
import OwnerPage from "./OwnerPage";
import MenuRegistration from "./components/MenuRegistration";
import SalesHistory from "./SalesHistory";

function App() {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const[salesHistory, setSalesHistory] = useState([]);

  useEffect(() => {
    selectPurchaseHistory();
    selectSalesHistory();
  }, []);

  const selectPurchaseHistory = async () => {
    try {
      const result = await axios.get("/purchaseHistory");
      const purchaseHistory = result.data;
      setPurchaseHistory(purchaseHistory);
    } catch (error) {
      console.log(error);
    }
  };
  
  const selectSalesHistory = async () => {
    try {
      const result = await axios.get("/SalesHistory");
      const salesHistory = result.data;
      setSalesHistory(salesHistory);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/review/:pizzaPk" element={<ViewReview />} />
          <Route
            path="/purchasehistory"
            element={<PurchaseHistory orderInfo={purchaseHistory} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/owner" element={<OwnerPage/>} />
          <Route path="/ownerReg" element={<MenuRegistration/>} />
          <Route path="/SalesHistory" element={<SalesHistory salesInfo={salesHistory}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
