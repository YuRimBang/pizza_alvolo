import React, { useState } from "react";
import '../css/OwnerMyPage.css';
import MenuRegistration from './MenuRegistration';
import SalesInfo from './SalesInfo';

function OwnerMyPage() {
  const [isMenuTabActive, setIsMenuTabActive] = useState(true); // 메뉴 등록 탭 활성화 여부 상태

  const handleMenuTabClick = () => {
    setIsMenuTabActive(true);
  };

  const handleSalesTabClick = () => {
    setIsMenuTabActive(false);
  };

  return(
    <div className="mypage">
      <div className="mypage_header">
        <div className="mypage_header_title">
          마이페이지
        </div>
      </div>
      <div className="mypage_menutab">
        <div className="menutab_page_title">
          <h5 className={`tab ${isMenuTabActive ? 'active' : ''}`} onClick={handleMenuTabClick}>
            메뉴 등록
          </h5>
        </div>
        <div className="menutab_page_title">
          <h5 className={`tab ${!isMenuTabActive ? 'active' : ''}`} onClick={handleSalesTabClick}>
            판매 수량 확인
          </h5>
        </div>
      </div>
      {isMenuTabActive ? <MenuRegistration /> : <SalesInfo />}
    </div>
  )
}

export default OwnerMyPage;
