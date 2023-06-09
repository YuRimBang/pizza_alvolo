import "./css/OwnerPage.css";
import Header from "./components/Header";
import OwnerPageHeader from "./components/OwnerPageHeader";
import MenuRegistration from "./components/MenuRegistration";
import SalesHistory from "./SalesHistory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function OwnerPage() {
  const sales_info1 = {
    menu: "하프앤하프(하와이안 치즈크러스트)",
    cnt: "1",
  };
  const sales_info2 = {
    menu: "하프앤하프(옥수수 치즈크러스트)",
    cnt: "3",
  };

  const salesArr = [sales_info1, sales_info2];

  return (
    <div className="background">
      <Header />
      <div>
        <OwnerPageHeader />
        <Router>
          <Routes>
            <Route path="/ownerPage" element={<MenuRegistration />} />
            <Route 
            path="/SalesHistory" 
            element={<SalesHistory salesInfo={salesArr} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default OwnerPage;
