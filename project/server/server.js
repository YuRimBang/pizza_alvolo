const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')

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

app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})
