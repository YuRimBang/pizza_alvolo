import { useState } from "react";
import "../css/MyPageInfo.css";

function MyPageInfo() {
  const myInfo = {
    name: "정채연",
    id: "dus0241",
    password: "121212",
    phoneNum: "64336366",
    birthDate: "2002.04.01",
    gender: "여성",
    email: "rtfgvb098",
    address: "경상북도 구미시 인동36길 23-34",
    detailAddress: "000동 000호",
  };

  const [isAddressEditing, setAddressEditing] = useState(false);
  const [address, setAddress] = useState(myInfo.address);
  const [detailAddress, setDetailAddress] = useState(myInfo.detailAddress);

  const handleAddressClick = () => {
    setAddressEditing(true);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleDetailAddressChange = (e) => {
    setDetailAddress(e.target.value);
  };

  return (
    <div className="mypage_info">
      <div className="mypage_info_title">
        <div className="mypage_info_title_text">나의 기본정보</div>
      </div>
      <div className="mypage_info_content">
        <div className="mypage_info_content_input">
          <input type="text" name="name" value={myInfo.name} disabled></input>
        </div>
        <div className="mypage_info_content_input">
          <input type="text" name="id" value={myInfo.id} disabled></input>
        </div>
        <div className="mypage_info_content_input" id="check_pk">
          <input
            id="check_pk"
            type="password"
            name="pw"
            value={myInfo.password}
          ></input>
        </div>
        <div className="special_signInfo">
          ※ 특수기호는 ! @ # $ % ^ * + = - 가능합니다
        </div>
        <div className="mypage_info_content_input">
          <input
            type="password"
            name="check_pk"
            placeholder="비밀번호 확인 (8~16자리 영문/숫자 조합)"
          ></input>
        </div>
        <div className="mypage_info_content_input">
          <div className="number_area_left">
            <select className="select_phoneNum" disabled>
              <option value="010">010</option>
            </select>
          </div>
          <div className="number_area_right">
            <input
              type="text"
              name="phoneNum"
              value={myInfo.phoneNum}
              disabled
            ></input>
            <span>수정</span>
          </div>
        </div>
        <div className="mypage_info_content_input">
          <input
            type="text"
            name="birthdate"
            value={`${myInfo.birthDate} (${myInfo.gender})`}
            disabled
          ></input>
        </div>
        <div className="mypage_info_content_input">
          <input type="text" name="email" value={myInfo.email} disabled></input>
          <div>@</div>
          <select className="select_email" disabled>
            <option value="naver.com">naver.com</option>
          </select>
        </div>
        <div className="mypage_info_content_input">
          <input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={handleAddressChange}
            readOnly={!isAddressEditing}
          ></input>
          <span onClick={handleAddressClick}>주소찾기</span>
        </div>
        <div className="mypage_info_content_input">
          <input
            type="text"
            name="address_detail"
            value={detailAddress}
            onChange={handleDetailAddressChange}
            readOnly={!isAddressEditing}
          ></input>
        </div>

        <div className="mypage_info_content_check">
          <div>
            <img src="./img/check.JPG"></img>
            <div className="content_check">SMS 수신 동의</div>
          </div>
          <div>
            <img src="./img/check.JPG"></img>
            <div className="content_check">E-mail 수신 동의</div>
          </div>
        </div>
        <div className="edit_container_button">
          <div className="gray_button">취소</div>
          <div className="blue_button">확인</div>
        </div>
      </div>
    </div>
  );
}

export default MyPageInfo;
