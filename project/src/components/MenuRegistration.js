import React, { useState } from "react";
import '../css/MenuRegistration.css';


function MenuRegistration() {
  return (
    <div className="mypage_info">

      <div className="mypage_info_title">
        <div className="mypage_info_title_text">
          메뉴등록
        </div>
      </div>

      <div className="mypage_info_content">

        <div className="mypage_info_content_input">
          <input type="text" name="menuName" placeholder="메뉴명"></input>
        </div>
        <div className="mypage_info_content_input">
          <input type="text" name="menuName_eng" placeholder="메뉴 영문명"></input>
        </div>
        <div className="mypage_info_content_input">
          <input type="text" name="discription" placeholder="메뉴 설명"></input>
        </div>
        <div className="mypage_info_content_input">
          <input type="text" name="tag" placeholder="메뉴 태그"></input>
        </div>
        <div className="mypage_info_content_input">
          <input type="text" name="ingredient" placeholder="주요 재료"></input>
        </div>

        <form> {/* 사이즈 */}
          <div className="mypage_info_content_input">
              <label>사이즈: &nbsp;</label>
              <label>
                <input type="checkbox" id="P" name="pizza" value="cheese-crust" />
                P <input type="text" name="P_price" placeholder="가격" />
                원
              </label>
              <label>
                <input type="checkbox" id="R" name="pizza" value="sweet-potato-gold" />
                R <input type="text" name="R_price" placeholder="가격" />
                원
              </label>
              <label>
                <input type="checkbox" id="L" name="pizza" value="red-bean-gold" />
                L <input type="text" name="L_price" placeholder="가격" />
                원
            </label>
          </div>
        </form>

        {/* 사진 등록 */}
        <div class="form-group">
          <label for="photo-upload">피자 사진 등록</label>
          <div class="file-input">
            <input type="file" id="cc" name="photo-upload" multiple></input>
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

export default MenuRegistration;
