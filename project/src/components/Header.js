import { Link } from "react-router-dom";

import "../css/Header.css";

function Header({ isBoxVisible, setIsBoxVisible }) {
  const handleLogout = () => {
    fetch("/logout", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          // 로그아웃 성공
          alert("로그아웃 성공");
        } else {
          // 로그아웃 실패
          alert("로그아웃 실패");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };
  return (
    <div className="web-main-tab-top">
      <div className="logo">
        <img
          src="/hamberger.png"
          className="web-icon-menu"
          alt="menu"
          onClick={handleClick}
        />
        <Link to="/">
          <img src="/logo.png" className="web-icon-logo" alt="logo" />
        </Link>
      </div>
      <div className="tab-top-middle">
        <Link to="/pizza">
          <span className="top-middle-text">피자</span>
        </Link>
        <span className="top-middle-text">스페셜반반피자</span>
        <span className="top-middle-text">세트</span>
        <span className="top-middle-text">사이드</span>
        <span className="top-middle-text">하프앤하프</span>
        <span className="top-middle-text">멤버십˙제휴할인</span>
        <span className="top-middle-text">이벤트</span>
      </div>
      <div className="tab-top-right">
        <div className="tab-text-img-layout">
          <div className="top-right-text-layout">
            <Link to="/myPage">
              {" "}
              {/* 여기서 경로를 "/myPage"로 수정 */}
              <span className="top-right-text">마이페이지</span>
            </Link>
            <Link to="/login">
              <span className="top-right-text">로그인</span>
            </Link>
            <span className="top-right-text" onClick={handleLogout}>
              로그아웃
            </span>
          </div>
          <Link to="/shopping">
            <img src="/pizza.png" className="icon-pizza" alt="pizza" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
