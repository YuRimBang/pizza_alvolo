import "./css/Login.css";
import Header from "./components/Header";
import React, { useState } from "react";
import MainUnder from './components/MainUnder';

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleLogin = () => {
    const formData = {
      id: id,
      pw: pw,
    };
    console.log(formData);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // 로그인 응답 데이터 확인
        if (data.success) {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
      <div className="login_container">
        <div className="login_header">로그인</div>
        <div className="login">
          <div className="login_ment">알볼로 여행을 위해</div>
          <div>
            <span className="login_ment_blue">로그인</span>
            <span className="login_ment">을 해주세요 :)</span>
          </div>
          <input
            className="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <input
            className="pw"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          ></input>
          <div className="login_btn" onClick={handleLogin}>
            로그인
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;