import "./css/MyPage.css";
import Header from "./components/Header";

import MyPageHeader from "./components/MyPageHeader";
import MyPageInfo from "./components/MyPageInfo";

function MyPage() {
  return (
    <div>
      <Header></Header>
      <div className="mypage">
        <MyPageHeader></MyPageHeader>
        <MyPageInfo></MyPageInfo>
      </div>
    </div>
  );
}

export default MyPage;
