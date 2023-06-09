import "./css/MyPage.css";
import Header from "./components/Header";
import MyPageHeader from "./components/MyPageHeader";
import OrderInfo from "./components/OrderInfo"

function PurchaseHistory({ orderInfo }) {
  if (!orderInfo || orderInfo.length === 0) {
    return (
      <div>
        <Header></Header>
        <div className="mypage">
          <MyPageHeader></MyPageHeader>
          <div className="my_order_info">
            <p className="noHistory">주문내역이 없습니다</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <div className="mypage">
        <MyPageHeader></MyPageHeader>
        <div className="my_order_info">
          {orderInfo.map((m) => (
            <OrderInfo orderInfoEach={m} key={m.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PurchaseHistory;
