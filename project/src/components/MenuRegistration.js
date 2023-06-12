import React, { useState } from "react";
import '../css/MenuRegistration.css';
import Header from "./Header";
import OwnerPageHeader from "./OwnerPageHeader";

function MenuRegistration() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const [inputs, setInputs] = useState({
    menuName: "",
    menuName_eng: "",
    category: "",
    description: "",
    tag: "",
    ingredient: "",
    P: false,
    R: false,
    L: false,
    P_price: "",
    R_price: "",
    L_price: "",
    storePk: 1,
  })

  const [file, setFile] = useState(null);


  const {menuName, menuName_eng, category, description, tag, ingredient, P_price, R_price, L_price, storePk} = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputs({
      ...inputs,
      [name]: value,
    })
  }


  const submitMenu = () => {

    //P가 체크됐을 때
    if(inputs.P){
      const formData = new FormData();
      formData.append("file", file);
  
      const menuP = {
        storePk: 1,
        menuName: inputs.menuName,
        menuName_eng: inputs.menuName_eng,
        category: inputs.category,
        description: inputs.description,
        tag: inputs.tag,
        ingredient: inputs.ingredient,
        size: "P",
        price: parseInt(inputs.P_price, 10)
      };

      formData.append("menuData", JSON.stringify(menuP)); // 메뉴 데이터도 formData에 추가
  
      fetch("/menuRegistration", {
        method: "post",
        body: formData,
      })
      .then((res) => res.json())
      .then((json) => {
        setInputs(json.text);
      });
  
    }

    //R이 체크됐을 때
    if(inputs.R){
      const formData = new FormData();
      formData.append("file", file);
  
      const menuR = {
        storePk: 1,
        menuName: inputs.menuName,
        menuName_eng: inputs.menuName_eng,
        category: inputs.category,
        description: inputs.description,
        tag: inputs.tag,
        ingredient: inputs.ingredient,
        size: "R",
        price: parseInt(inputs.R_price, 10)
      };
  
      formData.append("menuData", JSON.stringify(menuR)); 

      fetch("/menuRegistration", {
        method: "post",
        body: formData,
      })
      .then((res) => res.json())
      .then((json) => {
        setInputs(json.text);
      });
  
    }

    //L이 체크됐을 때
    if(inputs.L){
      const formData = new FormData();
      formData.append("file", file);
  
      const menuL = {
        storePk: 1,
        menuName: inputs.menuName,
        menuName_eng: inputs.menuName_eng,
        category: inputs.category,
        description: inputs.description,
        tag: inputs.tag,
        ingredient: inputs.ingredient,
        size: "L",
        price: parseInt(inputs.L_price, 10)
      };
  
      formData.append("menuData", JSON.stringify(menuL)); // 메뉴 데이터도 formData에 추가

      fetch("/menuRegistration", {
        method: "post",
        body: formData,
      })
      .then((res) => res.json())
      .then((json) => {
        setInputs(json.text);
      });
  
    }
  };


  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: checked,
      P_price: prevState.P ? prevState.P_price : "",
      R_price: prevState.R ? prevState.R_price : "",
      L_price: prevState.L ? prevState.L_price : "",
    }));
    };


  // 파일 선택시
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };


  const handleConfirmation = () => {
    submitMenu();
    alert("메뉴가 등록되었습니다.");
  };
  

  return (
    <div>
       <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
      <OwnerPageHeader />

    <div className="menu_register">

      <div className="menu_register_title">
        <div className="menu_register_title_text">
          메뉴등록
        </div>
      </div>

      <div className="menu_register_content">

        <div className="menu_register_content_input">
          <input type="text" name="menuName" placeholder="메뉴명" value={menuName} onChange={onChange}></input>
        </div>
        <div className="menu_register_content_input">
          <input type="text" name="menuName_eng" placeholder="메뉴 영문명" value={menuName_eng} onChange={onChange}></input>
        </div>
        <div className="menu_register_content_input">
          <input type="text" name="category" placeholder="카테고리" value={category} onChange={onChange}></input>
        </div>
        <div className="menu_register_content_input">
          <input type="text" name="description" placeholder="메뉴 설명" value={description} onChange={onChange}></input>
        </div>
        <div className="menu_register_content_input">
          <input type="text" name="tag" placeholder="메뉴 태그" value={tag} onChange={onChange}></input>
        </div>
        <div className="menu_register_content_input">
          <input type="text" name="ingredient" placeholder="주요 재료" value={ingredient} onChange={onChange}></input>
        </div>

        <form> {/* 사이즈 */}
          <div className="menu_register_content_input">
              <label>사이즈: &nbsp;</label>
              <label>
              P <input type="checkbox" name="P" checked={inputs.P} onChange={handleCheckboxChange} />
                <input type="text" name="P_price" placeholder="가격"  value={P_price} onChange={onChange}/>
                원
              </label>
              <label>
              R  <input type="checkbox" name="R" checked={inputs.R} onChange={handleCheckboxChange} />
                <input type="text" name="R_price" placeholder="가격" value={R_price} onChange={onChange}/>
                원
              </label>
              <label>
              L  <input type="checkbox" name="L" checked={inputs.L} onChange={handleCheckboxChange}/>
                 <input type="text" name="L_price" placeholder="가격" value={L_price} onChange={onChange}/>
                원
            </label>
          </div>
        </form>

        {/* 사진 등록 */}
        <div className="form-group">
          <label for="photo-upload">피자 사진 등록</label>
          <div className="file-input">
            <input type="file" name="file" onChange={handleFileChange}></input>
            {file && <p>Selected file: {file.name}</p>}
          </div>
        </div>

        <div className="edit_container_button">
          <div className="gray_button">취소</div>
          <div className="blue_button"  onClick={handleConfirmation}>확인</div>
        </div>

    </div>

  </div>      
</div>
  );
}

export default MenuRegistration;
