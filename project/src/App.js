// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Pizza from './pizza';
import Shopping from './shopping';
import MyPage from './MyPage';
import Login from './Login'
import PurchaseHistory from './PurchaseHistory';
import axios from "axios";

function App() {
  const selectAll = async () => {
    alert("selectAll");
    const result = await axios.get('/product');
    console.log(result);
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/purchasehistory" element={<PurchaseHistory />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
