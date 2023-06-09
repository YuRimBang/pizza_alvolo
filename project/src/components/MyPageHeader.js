import "../css/MyPageHeader.css";
import { NavLink } from "react-router-dom";

function MyPageHeader() {
  return (
    <div>
      <div className="mypage_header">
        <div className="mypage_header_title">마이페이지</div>
      </div>
      <div className="mypage_menutab">
        <NavLink to="/purchasehistory">
          <div className="menutab_page_title">
            <h5 className="tab">주문내역</h5>
          </div>
        </NavLink>
        <div className="menutab_page_title">
          <h5 className="tab">쿠폰함</h5>
        </div>
        <div className="menutab_page_title">
          <h5 className="tab">MY CLASS</h5>
        </div>
        <div className="menutab_page_title">
          <h5 className="tab">비행기스탬프</h5>
        </div>
        <NavLink to="/myPage">
          <div className="menutab_page_title">
            <h5 className="tab">정보수정</h5>
          </div>
        </NavLink>
        <div className="menutab_page_title">
          <h5 className="tab">회원탈퇴</h5>
        </div>
      </div>
    </div>
  );
}

export default MyPageHeader;
