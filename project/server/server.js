const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db.js");
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(
  '/shoppingBasket',
  createProxyMiddleware({
    target: 'http://localhost:4000',
    changeOrigin: true,
  })
);

app.get('/', (req, res) => {
  console.log('/root');
  res.send('/root');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/pizza", (req, res) => {
  console.log("/pizza");
  let { activeTap, category, op } = req.query;
  console.log(category);

  let query = "SELECT * FROM product";

  if (category === "장인") {
    query += " WHERE category='장인'";
  } else if (category === "달인") {
    query += " WHERE category='달인'";
  } else if (category === "명품") {
    query += " WHERE category='명품'";
  }

  if (op === "lowPay") {
    query += " ORDER BY price ASC";
  } else if (op === "hiPay") {
    query += " ORDER BY price DESC";
  } else {
    query += " ORDER BY launchDate DESC";
  }

  db.query(query, (err, data) => {
    if (!err) {
      res.send(data);
      console.log(data);
    } else {
      console.log(err);
      res.status(500).send("Error");
    }
  });
});

app.post("/shoppingPizza", (req, res) => {
  const { userPk, menuPk, price, cnt } = req.query;

  db.query(
    "SELECT * FROM shopping_basket WHERE userPk = ? AND productPk = ?",
    [userPk, menuPk],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send("Error");
      } else {
        if (rows.length > 0) {
          res.send("이미 장바구니에 존재하는 상품입니다");
        } else {
          db.query(
            "INSERT INTO shopping_basket (userPk, productPk, price, cnt) VALUES (?, ?, ?, ?)",
            [userPk, menuPk, price, cnt],
            function (err, rows, fields) {
              if (err) {
                console.log(err);
                res.status(500).send("장바구니 실패");
              } else {
                console.log("추가 성공");
                res.send("장바구니에 추가 했습니다");
              }
            }
          );
        }
      }
    }
  );
});


app.get("/shopping", (req, res) => {
  const userPk = req.query.userPk;

  db.query(
    "SELECT * FROM shopping_basket WHERE userPk = ?",
    [userPk],
    (err, rows) => {
      if (err) {
        console.error("장바구니 데이터를 가져오는데 실패했습니다:", err);
        res.status(500).send("서버 에러");
      } else {
        const shoppingData = rows.map((row) => {
          const productPk = row.productPk;
          return new Promise((resolve, reject) => {
            // 피자 메뉴 데이터 가져오기
            db.query(
              "SELECT * FROM product WHERE Pk = ?",
              [productPk],
              (err, productRows) => {
                if (err) {
                  console.error("상품 데이터를 가져오는데 실패했습니다:", err);
                  reject(err);
                } else {
                  const pizzaData = productRows[0];
                  const shoppingItem = {
                    menuName: pizzaData.menuName,
                    price: row.price,
                    cnt: row.cnt,
                    size: pizzaData.size,
                  };
                  resolve(shoppingItem);
                }
              }
            );
          });
        });

        Promise.all(shoppingData)
          .then((items) => {
            res.json(items);
          })
          .catch((err) => {
            console.error("상품 데이터를 가져오는데 실패했습니다:", err);
            res.status(500).send("서버 에러");
          });
      }
    }
  );
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

app.post("/shoppingCancel", (req, res) => {
  const pk = req.body.pk;
  const userPk = req.body.userPk;

  db.query("DELETE FROM shopping_basket WHERE pk = ? AND userPk = ?", [pk, userPk], (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
      res.status(500).send("Error canceling shopping item");
    }
  });
});

app.post("/order", (req, res) => {
  const userPk = req.body.userPk;

  db.query("DELETE FROM shopping_basket WHERE userPk = ?", [userPk], (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
      res.status(500).send("Error canceling shopping item");
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

app.post("/userInfo", (req, res) => {
  const pk = req.body.pk;
  const address = req.body.address;
  const addressDetail = req.body.addressDetail;

  db.query(
    "UPDATE user SET address = ?, addressDetail = ? WHERE pk = ?",
    [address, addressDetail, pk],
    (err, rows, fields) => {
      if (err) {
        console.log("주소 업데이트 실패:", err);
        res.json({ success: false });
      } else {
        console.log("주소 업데이트 성공");
        res.json({ success: true });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});
