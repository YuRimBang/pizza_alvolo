import "../css/OwnerPageHeader.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function OwnerPageHeader() {
  return (
    <Router>
      <div className="ownerpage">
        <div className="mypage_header">
            <div className="mypage_header_title">
                마이페이지
            </div>
        </div>
        <div className="mypage_menutab">
            <NavLink to="/">
            <div className="menutab_page_title">
                <h5 className="tab">
                메뉴 등록
                </h5>
            </div>
            </NavLink>
            <NavLink to="/SalesHistory">
            <div className="menutab_page_title">
                <h5 className="tab">
                판매 수량 확인
                </h5>
            </div>
        </NavLink>
      </div>
    </div>
    </Router>
  );
}

export default OwnerPageHeader;