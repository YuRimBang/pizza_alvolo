import "./css/OwnerPage.css";
import Header from "./components/Header";
import OwnerPageHeader from "./components/OwnerPageHeader";
import MenuRegistration from "./components/MenuRegistration";
import SalesHistory from "./SalesHistory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <OwnerPageHeader />
    </div>
  );
}

export default OwnerPage;
