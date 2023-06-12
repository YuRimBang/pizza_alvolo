const express = require("express");
const app = express();
const multer = require("multer");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db.js");
const { createProxyMiddleware } = require("http-proxy-middleware");
const session = require("express-session");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// app.use(
//   session({
//     secret: "your-secret-key",
//     resave: false,
//     saveUninitialized: true,
//   })
// );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  console.log("/root");
  res.send("/root");
});

app.post("/login", (req, res) => {
  const { id, pw } = req.body;
  db.query(
    "SELECT * FROM user WHERE id = ? AND pw = ?",
    [id, pw],
    (err, rows) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ success: false, message: "인증에 실패했습니다1" });
      } else {
        if (rows.length > 0) {
          const user = rows[0];
          // // 인증에 성공한 경우 세션에 사용자 정보 저장
          req.session.user = {
            pk: user.pk,
            id: user.id,
            pw: user.pw,
          };
          res.cookie("userPk", user.pk);

          res.json({ success: true, message: "인증에 성공했습니다" });
        } else {
          res.json({ success: false, message: "인증에 실패했습니다2" });
        }
      }
    }
  );
});

// 로그아웃 라우트
app.post("/logout", (req, res) => {
  // const pk = req.session.user.pk // 이렇게 해서 가져올수있음
  // console.log(pk)

  // 세션에서 사용자 정보를 삭제
  req.session.destroy();
  res.clearCookie("userPk");
  res.json({ success: true });
  // res.redirect("/main")
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

app.post("/shoppingCancel", (req, res) => {
  const userPk = req.body.userPk;
  const menuName = req.body.menuName;

  db.query(
    "SELECT * FROM product WHERE menuName = ?",
    [menuName],
    (err, result) => {
      if (!err && result.length > 0) {
        const productPk = result[0].pk; // assuming 'pk' is the column name for product primary key
        db.query(
          "DELETE FROM shopping_basket WHERE productPk = ? AND userPk = ?",
          [productPk, userPk],
          (err, result) => {
            if (!err) {
              console.log("삭제 성공");
              res.send(result);
            } else {
              console.error(err);
              res
                .status(500)
                .send("장바구니 항목 삭제 중 오류가 발생했습니다.");
            }
          }
        );
      } else {
        console.error(err);
        res.status(500).send("장바구니 항목 삭제 중 오류가 발생했습니다.");
      }
    }
  );
});

//

app.post("/changeCnt", (req, res) => {
  const userPk = req.body.userPk;
  const menuName = req.body.menuName;
  const cnt = req.body.cnt;

  db.query(
    "SELECT * FROM product WHERE menuName = ?",
    [menuName],
    (err, result) => {
      if (!err && result.length > 0) {
        const productPk = result[0].pk; // assuming 'pk' is the column name for product primary key
        db.query(
          "UPDATE shopping_basket SET cnt = ? WHERE userPk = ? AND productPk = ?",
          [cnt, userPk, productPk],
          (err, result) => {
            if (!err) {
              console.log("수정 성공");
              res.send(result);
            } else {
              console.error(err);
              res
                .status(500)
                .send("장바구니 항목 수정 중 오류가 발생했습니다.");
            }
          }
        );
      } else {
        console.error(err);
        res.status(500).send("장바구니 항목 수정 중 오류가 발생했습니다.");
      }
    }
  );
});

//

app.post("/orderPizza", (req, res) => {
  const userPk = req.body.userPk;
  const storePk = req.body.storePk;

  db.query(
    "SELECT productPk, cnt, price FROM shopping_basket WHERE userPk = ?",
    [userPk],
    (err, shoppingData) => {
      if (shoppingData.length > 0) {
        db.query(
          "INSERT INTO `order` (userPk, storePk) VALUES (?, ?)",
          [userPk, storePk],
          (err, orderData) => {
            if (!err) {
              const orderPk = orderData.insertId;
              const values = shoppingData.map((item) => [
                orderPk,
                item.productPk,
                item.cnt,
                item.price,
              ]);
              db.query(
                "INSERT INTO order_product (orderPk, productPk, cnt, price) VALUES ?",
                [values],
                (err, order_productData) => {
                  if (!err) {
                    db.query(
                      "DELETE FROM shopping_basket WHERE userPk = ?",
                      [userPk],
                      (err, result) => {
                        if (!err) {
                          res.send(result);
                        } else {
                          console.log(err);
                          res.status(500).send("order_product 실패");
                        }
                      }
                    );
                  } else {
                    console.log(err);
                    res.status(500).send("order_product 실패");
                  }
                }
              );
            } else {
              console.log(err);
              res.status(500).send("order 실패");
            }
          }
        );
      } else {
        console.log(err);
        res.status(500).send("select 실패");
      }
    }
  );
});

//
app.get("/reviewPizzaInfo/:pk", (req, res) => {
  const pizzaPk = req.params.pk;
  db.query(
    "SELECT menuName, engName, size, price, image FROM product WHERE pk = ?;",
    [pizzaPk],
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

app.get("/review/:pk", (req, res) => {
  const pizzaPk = req.params.pk;

  db.query(
    "SELECT r.rate, r.content, u.name " +
      "FROM review r " +
      "JOIN order_product op ON r.orderProductPk = op.pk " +
      "JOIN `order` o ON op.orderPk = o.pk " +
      "JOIN user u ON o.userPk = u.pk " +
      "WHERE op.productPk = ?;",
    [pizzaPk],
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

app.get("/userInfo", (req, res) => {
  const pk = req.session.user.pk;
  db.query("select * from user where pk = ?", [pk], (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

app.get("/purchaseHistory", (req, res) => {
  const pk = req.session.user.pk;
  db.query(
    "SELECT o.orderDate, p.menuName, op.price, u.address, u.addressDetail, s.name FROM `order` o " +
      "JOIN order_product op ON o.pk = op.orderPk " +
      "JOIN product p ON op.productPk = p.pk " +
      "JOIN user u ON o.userPk = u.pk " +
      "JOIN store s ON o.storePk = s.pk " +
      "WHERE u.pk = ?",
    [pk],
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
    "SELECT op.pk, o.orderDate, o.orderDate, p.menuName, op.price, u.address, u.addressDetail, s.name FROM `order` o " +
      "JOIN order_product op ON o.pk = op.orderPk " +
      "JOIN product p ON op.productPk = p.pk " +
      "JOIN user u ON o.userPk = u.pk " +
      "JOIN store s ON o.storePk = s.pk " +
      "WHERE u.pk = ?",
    [pk],
    (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        console.log(err);
      }
    }
  );
});

app.get("/isReview/:pk", (req, res) => {
  const order_product_pk = req.params.pk;
  db.query(
    "SELECT review FROM order_product WHERE pk = ?",
    [order_product_pk],
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
    "INSERT INTO review (orderProductPk, content, rate) VALUES (?, ?, ?)",
    [orderProductPk, content, rate],
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
      } else {
        console.log("성공");
        db.query(
          "UPDATE order_product SET review = 1 WHERE pk = ?",
          [orderProductPk],
          function (err, rows, fields) {
            if (err) {
              console.log("업데이트 실패");
            } else {
              console.log("업데이트 성공");
            }
          }
        );
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});
