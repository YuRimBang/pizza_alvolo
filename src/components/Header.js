import "../css/Header.css"
import React from "react";
function Header({onMenuClick}) {
  return (
    <div className="web-main-tab-top">
        <div className="logo">
            <img src="hamberger.png" className="web-icon-menu" alt="menu" onMenuClick={onMenuClick}/>
            <img src="logo.png" className="web-icon-logo" alt="logo" />
        </div>
        <div className="tab-top-middle">
            <span className="top-middle-text">피자</span>
            <span className="top-middle-text">스페셜반반피자</span>
            <span className="top-middle-text">세트</span>
            <span className="top-middle-text">사이드</span>
            <span className="top-middle-text">하프앤하프</span>
            <span className="top-middle-text">멤버십˙제휴할인</span>
            <span className="top-middle-text">이벤트</span>
        </div>
        <div class="tab-top-right">
            <div class="tab-text-img-layout">
                <div class="top-right-text-layout">
                    <span class="top-right-text">마이페이지</span>
                    <span class="top-right-text">회원가입</span>
                    <span class="top-right-text">로그인</span>
                    <span class="top-right-text">로그아웃</span>
                </div>
                <img src="pizza.png" class="icon-pizza"></img>
            </div>
        </div>
    </div>

);
}
export default Header;