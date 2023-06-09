import React, { useState } from "react";
import '../css/MenuRegistration.css';
import axios from 'axios';


function MenuRegistration() {

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
    storePk:1
  })

  const [selectedFile, setSelectedFile] = useState(null);


  const {menuName, menuName_eng, category, description, tag, ingredient,
    P_price, R_price, L_price, storePk} = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  };


  // 파일 선택시
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  const handleConfirmation = () => {
    const dataP = {
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

    fetch("/menuRegistration", dataP, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataP)
    })
    .then(response => {
      console.log(response.data);
      // P 사이즈 INSERT 성공
    })
    .then((json) => {
      setInputs(json.text);
    })
    .catch(error => {
      console.log(error);
      // P 사이즈 INSERT 실패
    });

    // if (inputs.P) {
    //   // P 사이즈에 대한 INSERT 쿼리 실행
    //   const dataP = {
    //     storePk: 1,
    //     menuName: inputs.menuName,
    //     menuName_eng: inputs.menuName_eng,
    //     category: inputs.category,
    //     description: inputs.description,
    //     tag: inputs.tag,
    //     ingredient: inputs.ingredient,
    //     size: "P",
    //     price: parseInt(inputs.P_price, 10)
    //   };
  
    //   axios
    //   .post("/menuRegistration", dataP, {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //     // P 사이즈 INSERT 성공
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // P 사이즈 INSERT 실패
    //   });
    //   }
  
    // if (inputs.R) {
    //   // R 사이즈에 대한 INSERT 쿼리 실행
    //   const dataR = {
    //     storePk: 1,
    //     menuName: inputs.menuName,
    //     menuName_eng: inputs.menuName_eng,
    //     category: inputs.category,
    //     description: inputs.description,
    //     tag: inputs.tag,
    //     ingredient: inputs.ingredient,
    //     size: "R",
    //     price: parseInt(inputs.R_price, 10)
    //   };
  
    //   axios
    //   .post("/menuRegistration", dataR, {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //     // P 사이즈 INSERT 성공
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // P 사이즈 INSERT 실패
    //   });
    //   }

    // if (inputs.L) {
    //   // L 사이즈에 대한 INSERT 쿼리 실행
    //   const dataL = {
    //     storePk: 1,
    //     menuName: inputs.menuName,
    //     menuName_eng: inputs.menuName_eng,
    //     category: inputs.category,
    //     description: inputs.description,
    //     tag: inputs.tag,
    //     ingredient: inputs.ingredient,
    //     size: "L",
    //     price: parseInt(inputs.L_price, 10)
    //   };
  
    //   axios
    //   .post("/menuRegistration", dataL, {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //     // P 사이즈 INSERT 성공
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // P 사이즈 INSERT 실패
    //   });
  
    // }

    
  
    // const formData = new FormData();
    // formData.append("file", selectedFile);


    // axios
    // .post("/upload", formData) // 파일 업로드 요청
    // .then(response => {
    //   console.log(response.data);
    //   // 파일 업로드 성공
      
    //   const fileUrl = response.data.fileUrl; // 파일의 주소

    //   })
    // .catch(error => {
    //   console.log(error);
    //   // 파일 업로드 실패
    // });
  };
  

  return (
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
                <input type="checkbox" name="P" checked={inputs.P} onChange={handleCheckboxChange} />
                P <input type="text" name="P_price" placeholder="가격"  value={P_price} onChange={onChange}/>
                원
              </label>
              <label>
                <input type="checkbox" name="R" checked={inputs.R} onChange={handleCheckboxChange} />
                R <input type="text" name="R_price" placeholder="가격" value={R_price} onChange={onChange}/>
                원
              </label>
              <label>
                <input type="checkbox" name="L" checked={inputs.L} onChange={handleCheckboxChange}/>
                L <input type="text" name="L_price" placeholder="가격" value={L_price} onChange={onChange}/>
                원
            </label>
          </div>
        </form>

        {/* 사진 등록 */}
        <div class="form-group">
          <label for="photo-upload">피자 사진 등록</label>
          <div class="file-input">
            <input type="file" id="fileUrl" name="photo-upload" onChange={handleFileChange}></input>
          </div>
        </div>

        <div className="edit_container_button">
          <div className="gray_button">취소</div>
          <div className="blue_button"  onClick={handleConfirmation}>확인</div>
        </div>

    </div>

  </div>      

  );
}

export default MenuRegistration;
