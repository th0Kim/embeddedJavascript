// server.js
const express = require("express");
const app = express();
const path = require("path");

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "/public")));

// EJS 설정
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // views 폴더 설정

// 라우팅
app.get("/", (req, res) => {
  res.render("index"); // index.ejs 파일을 렌더링
});

// 서버 실행
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
