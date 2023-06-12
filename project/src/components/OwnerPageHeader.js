import "../css/OwnerPageHeader.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function OwnerPageHeader() {
  return (
      <div className="ownerpage">
        <div className="ownerpage_header">
            <div className="ownerpage_header_title">
                마이페이지
            </div>
        </div>
        <div className="ownerpage_menutab">
            <NavLink to="/ownerReg">
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
  );
}

export default OwnerPageHeader;