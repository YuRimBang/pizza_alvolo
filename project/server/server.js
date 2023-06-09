const express = require("express");
const app = express();
const multer = require('multer');
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db.js");
// const upload = multer({ dest: 'uploads/' }); // 파일 업로드를 처리할 경로 설정

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});

const upload = multer({ storage: storage });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
  console.log("/root");
});

app.get("/product", (req, res) => {
  console.log("/product");
  db.query("select * from product", (err, data) => {
    if (!err) {
      // console.log(data)
      res.send(data);
      console.log(data);
    } else {
      console.log(err);
    }
  });
});

app.get("/userInfo", (req, res) => {
  db.query("select * from user where pk = 1", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

app.get("/purchaseHistory", (req, res) => {
  db.query(
    "SELECT o.orderDate, p.menuName, op.price, u.address, u.addressDetail, s.name FROM `order` o " +
      "JOIN order_product op ON o.pk = op.orderPk " +
      "JOIN product p ON op.productPk = p.pk " +
      "JOIN user u ON o.userPk = u.pk " +
      "JOIN store s ON o.storePk = s.pk " +
      "WHERE u.pk = 1",
    (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/review", (req, res) => {
  const orderProductPk = req.body.orderProductPk;
  const content = req.body.content;
  const rate = req.body.rate;
  db.query(
    "INSERT INTO review (orderProductPk, content, rate) values (?, ?, ?)",
    [orderProductPk, content, rate],
    function (err, rows, fields) {
      if ((err, rows, fields)) {
        if (err) {
          console.log("실패");
        } else {
          console.log("성공");
        }
      }
    }
  );
});

// 메뉴 등록
app.post('/menuRegistration', upload.single('file'),  (req, res) => {
  const file = req.file;
  const imagePath = file.path; // 업로드된 파일의 경로

  console.log('menuReigstration');

  const storePk = JSON.parse(req.body.menuData).storePk;
  const menuName = JSON.parse(req.body.menuData).menuName;
  const menuName_eng = JSON.parse(req.body.menuData).menuName_eng;
  const category = JSON.parse(req.body.menuData).category;
  const description = JSON.parse(req.body.menuData).description;
  const tag = JSON.parse(req.body.menuData).tag;
  const ingredient = JSON.parse(req.body.menuData).ingredient;
  const size = JSON.parse(req.body.menuData).size;
  const price = JSON.parse(req.body.menuData).price;


  db.query(
    "INSERT INTO product (storePk, menuName, engName, category, description, tag, ingredient, size, price, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [storePk, menuName, menuName_eng, category, description, tag, ingredient, size, price, imagePath],
    function (err, rows, fields) {
      if ((err, rows, fields)) {
        if (err) {
          console.log("실패");
        } else {
          console.log("성공");
        }
      }
    }
  );
});

// 판매 수량 확인
app.get("/SalesHistory", (req, res) => {
  db.query(
    "SELECT p.menuName, SUM(op.cnt) AS cnt " +
    "FROM product p " +
    "JOIN order_product op ON p.pk = op.productPk " +
    "GROUP BY p.menuName",
      (err, data) => {
      if (!err) {
        res.send(data);
        console.log(data);
      } else {
        console.log(err);
      }
    }
  );
});

//차트
app.get('/sales', (req, res) => {
  db.query(
    "SELECT CASE WHEN DAYOFWEEK(orderDate) = 1 THEN '일요일' " +
    "WHEN DAYOFWEEK(orderDate) = 2 THEN '월요일' " +
    "WHEN DAYOFWEEK(orderDate) = 3 THEN '화요일' " +
    "WHEN DAYOFWEEK(orderDate) = 4 THEN '수요일' " +
    "WHEN DAYOFWEEK(orderDate) = 5 THEN '목요일' " +
    "WHEN DAYOFWEEK(orderDate) = 6 THEN '금요일' " +
    "WHEN DAYOFWEEK(orderDate) = 7 THEN '토요일' " +
    "END AS dayOfWeek, " +
    "SUM(op.price * op.cnt) AS totalSales " +
    "FROM `order` o JOIN `order_product` op ON o.pk = op.orderPk " +
    "GROUP BY dayOfWeek ORDER BY DAYOFWEEK(orderDate);",
      (err, data) => {
      if (!err) {
        res.send(data);
        console.log(data);
      } else {
        console.log(err);
      }
    }
  );
});




app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})
