// server.js
const express = require("express");
const app = express();

// EJS 설정
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // views 폴더 설정

// 라우팅
app.get("/", (req, res) => {
  res.render("index"); // index.ejs 파일을 렌더링
});

// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
