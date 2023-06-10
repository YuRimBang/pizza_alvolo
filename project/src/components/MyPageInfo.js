import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/MyPageInfo.css";

function MyPageInfo() {
  const [myInfo, setMyInfo] = useState({});
  const [isAddressEditing, setAddressEditing] = useState(false);
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  useEffect(() => {
    selectUser();
  }, []);

  const selectUser = async () => {
    const result = await axios.get("/userInfo");
    const userInfo = result.data[0];
    setMyInfo(userInfo);
    setAddress(userInfo.address);
    setDetailAddress(userInfo.addressDetail);
  };

  const handleAddressClick = () => {
    setAddressEditing(true);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleDetailAddressChange = (e) => {
    setDetailAddress(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      const result = await axios.post("/userInfo", {
        pk: myInfo.pk, // 유저의 고유 식별자
        address: address,
        addressDetail: detailAddress,
      });

      if (result.data.success) {
        console.log("주소 업데이트 성공");
        setAddressEditing(false);
        alert("주소가 변경되었습니다.");
      } else {
        console.log("주소 업데이트 실패");
      }
    } catch (error) {
      console.log("주소 업데이트 요청 실패:", error);
    }
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
            value={myInfo.pw}
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
            value={`${myInfo.birth} (${myInfo.gender === 0 ? "남성" : "여성"})`}
            disabled
          ></input>
        </div>
        <div className="mypage_info_content_input">
          <input
            type="text"
            name="email"
            value={
              myInfo.email
                ? myInfo.email.substring(0, myInfo.email.indexOf("@"))
                : ""
            }
            disabled
          />
          <div>@</div>
          <select className="select_email" disabled>
            <option>
              {myInfo.email
                ? myInfo.email.substring(myInfo.email.indexOf("@") + 1)
                : ""}
            </option>
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
          <div className="blue_button" onClick={handleSaveClick}>
            확인
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageInfo;
