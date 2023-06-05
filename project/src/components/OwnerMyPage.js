import React from "react";
import '../css/OwnerMyPage.css';

function OwnerMyPage() {

  return(
    <div className="mypage">
      <div className="mypage_header">
        <div className="mypage_header_title">
          마이페이지
        </div>
      </div>
      <div className="mypage_menutab">
        <div className="menutab_page_title">
          <h5 className="tab">메뉴 등록</h5>
        </div>
        <div className="menutab_page_title">
          <h5 className="tab">판매 수량 확인</h5>
        </div>
      </div>
      <div className="mypage_info">
        <div className="mypage_info_title">
          <div className="mypage_info_title_text">
            메뉴등록
          </div>
        </div>
        <div className="mypage_info_content">
          <div className="mypage_info_content_input">
            <input type="text" name="name" value="메뉴명" disabled></input>
          </div>
          <div className="mypage_info_content_input">
            <input type="text" name="id" value="메뉴 영문명" disabled></input>
          </div>
          {/* <div className="mypage_info_content_input"  id="check_pk">
            <input id="check_pk" type="text" name="pw" value="*****"></input>
          </div>
          <div className="special_signInfo">
            ※ 특수기호는 ! @ # $ % ^ * + = - 가능합니다
          </div> */}
          <div className="mypage_info_content_input">
            <input type="text" name="check_pk" placeholder="메뉴 설명"></input>
          </div>

          <form>
            <div className="mypage_info_content_input" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="cheese-crust" style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}>치즈크러스트</label><br />
                <input type="checkbox" id="cheese-crust" name="pizza" value="cheese-crust" />
                <label htmlFor="sweet-potato-gold"style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}>고구마골드</label><br />
                <input type="checkbox" id="sweet-potato-gold" name="pizza" value="sweet-potato-gold" />
                <label htmlFor="red-bean-gold">팥골드</label><br />
                <input type="checkbox" id="red-bean-gold" name="pizza" value="red-bean-gold" />
                <label htmlFor="cream-cheese-gold">슈크림치즈골드</label><br />
                <input type="checkbox" id="cream-cheese-gold" name="pizza" value="cream-cheese-gold" />
            </div>
           </form>

           {/* 체크 박스로 선택 가능 엣지  */}
            {/* 체크 박스로 주요 토핑  */}
            {/* 사이즈 및 조각에서 사이즈(지름), 중량, 조각 입력  */}
            {/* 알레르기 유발 재료 입력  */}
            {/* 영양성분 입력  */}
            {/* 원산지 입력  */}


          <div className="mypage_info_content_input">
            <div className="number_area_left">
              <select className="select_phoneNum" disabled>
                <option value="010">010</option>
              </select>
            </div>
            <div className="number_area_right">
              <input type="text" name="phoneNum" value="11111111" disabled></input>
              <span>수정</span>
            </div>
          </div>
          <div className="mypage_info_content_input">
            <input type="text" name="birthdate" value="2002.04.01 (여성)" disabled></input>
          </div>
          <div className="mypage_info_content_input">
            <input type="text" name="email" value="rtfgvb098" disabled></input>
            <div>@</div>
            <select className="select_email" disabled>
                <option value="naver.com">naver.com</option>
            </select>
          </div>
          <div className="mypage_info_content_input">
            <input id="address" type="text" name="address"></input>
            <span>주소찾기</span>
          </div>
          <div className="mypage_info_content_input">
            <input type="text" name="address_detail"></input>
          </div>

          {/* <div className="mypage_info_content_check">
            <div>
              <img src="./img/check.JPG"></img>
              <div className="content_check">SMS 수신 동의</div>
            </div>
            <div>
            <img src="./img/check.JPG"></img>
              <div className="content_check">E-mail 수신 동의</div>
            </div>
          </div> */}

          <div className="edit_container_button">
            <div className="gray_button">취소</div>
            <div className="blue_button">확인</div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default OwnerMyPage;