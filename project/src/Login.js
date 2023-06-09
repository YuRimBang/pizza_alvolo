import "./css/Login.css";
import Header from "./components/Header";

function Login() {
  return (
    <div>
      <Header></Header>
      <div className="login_container">
        <div className="login_header">로그인</div>
        <div className="login">
          <div className="login_ment">알볼로 여행을 위해</div>
          <div>
            <span className="login_ment_blue">로그인</span>
            <span className="login_ment">을 해주세요 :)</span>
          </div>
          <input className="id"></input>
          <input className="pw"></input>
          <div className="login_btn">로그인</div>
        </div>
      </div>
    </div>
  );
}

export default Login;