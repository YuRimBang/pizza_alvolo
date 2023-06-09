import "./css/OwnerPage.css";
import Header from "./components/Header";
import OwnerPageHeader from "./components/OwnerPageHeader";
import MenuRegistration from "./components/MenuRegistration";
import SalesHistory from "./SalesHistory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function OwnerPage() {

  const[salesHistory, setSalesHistory] = useState([]);

  useEffect(() => {
    selectSalesHistory();
  }, [])

  const selectSalesHistory = async () => {
    const result = await axios.get("/SalesHistory");
    const salesHistory = result.data;
    setSalesHistory(salesHistory);
  }

  return (
    <div className="background">
      <Header />
      <div>
        <OwnerPageHeader />
        <Router>
          <Routes>
            <Route path="/" element={<MenuRegistration />} />
            <Route 
            path="/SalesHistory" 
            element={<SalesHistory salesInfo={salesHistory} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default OwnerPage;
