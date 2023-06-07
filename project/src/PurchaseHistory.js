import "./css/MyPage.css";
import Header from "./components/Header";
import MyPageHeader from "./components/MyPageHeader";
import OrderInfo from "./components/OrderInfo";

function PurchaseHistory({ orderInfo }) {
  return (
    <div className="my_order_info">
      {orderInfo.map((m) => (
        <OrderInfo orderInfoEach={m}></OrderInfo>
      ))}
    </div>
  );
}

export default PurchaseHistory;
