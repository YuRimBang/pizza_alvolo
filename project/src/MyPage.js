import "./css/MyPage.css";
import Header from "./components/Header";
import MyPageHeader from "./components/MyPageHeader";
import MyPageInfo from "./components/MyPageInfo";
import PurchaseHistory from "./PurchaseHistory";
import { Routes, Route } from "react-router-dom";
function MyPage() {
  const order_info1 = {
    date: "2023-05-08 17:10",
    menu: "하프앤하프(하와이안 치즈크러스트)",
    price: "28,500",
    deliveryInfo: "경북 구미시 인동36길",
    orderStore: "구미도량봉곡점(054-454-8495)",
  };
  const order_info2 = {
    date: "2023-05-08 17:10",
    menu: "하프앤하프(옥수수 치즈크러스트)",
    price: "28,500",
    deliveryInfo: "경북 구미시 인동36길",
    orderStore: "구미도량봉곡점(054-454-8495)",
  };

  const orderArr = [order_info1, order_info2];

  return (
    <div>
      <Header></Header>
      <div className="mypage">
        <MyPageHeader></MyPageHeader>
        <Routes>
          <Route path="/" element={<MyPageInfo></MyPageInfo>}></Route>
          <Route
            path="/purchasehistory"
            element={<PurchaseHistory orderInfo={orderArr}></PurchaseHistory>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default MyPage;
