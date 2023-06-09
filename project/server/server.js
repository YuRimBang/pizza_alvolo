const express = require("express"); 
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')
const multer = require('multer');
const path = require('path');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    // 업로드된 파일 정보
    const file = req.file;
  
    // 파일이 정상적으로 업로드되었을 때의 처리
    if (file) {
      const fileUrl = path.join(__dirname, file.path);
  
      // 데이터베이스에 파일 정보를 삽입
      const query = 'INSERT INTO product (image) VALUES (?)';
      db.query(query, [fileUrl], (error, results) => {
        if (error) {
          console.error('데이터베이스 INSERT 오류:', error);
          res.status(500).json({ error: '데이터베이스 INSERT 오류' });
        } else {
          console.log('데이터베이스 INSERT 성공');
          res.json({ fileUrl });
        }
      });
    } else {
      // 파일 업로드 실패 처리
      res.status(400).json({ error: '파일 업로드 실패' });
    }
  });
  
    
  

app.get('/', (req, res)=>{
    console.log('/root')
})

app.get('/product', (req, res)=>{
    console.log('/product')
    db.query("select * from product", (err, data) => {
        if(!err){
            // console.log(data)
            res.send(data)
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})

// 메뉴 등록
app.post('/menuRegistration', (req, res) => {
    console.log('menuReigstration')
  const {storePk, menuName, menuName_eng, category, description, tag, ingredient, size, price} = req.body;
  
  db.query(
    "INSERT INTO product (storePk, menuName, engName, category, description, tag, ingredient, size, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [storePk, menuName, menuName_eng, category, description, tag, ingredient, size, price],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        console.log("Insert successful");
        res.status(200).send("Insert successful");
        console.log(result);
      }
    }
  );
});

// 판매수량확인
app.get('/salesInfo', (req, res)=>{
    console.log('/salesInfo')
    db.query("select * from order_product", (err, data) => {
        if(!err){
            // console.log(data)
            res.send(data)
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})


app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})
