// server.js
const express = require("express"); // express 모듈을 사용하기 위한 express 객체 생성
const path = require("path"); // 경로 설정을 위한 path 모듈

const app = express(); // express 모듈을 사용하기 위한 express 객체 생성

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "/public")));

// EJS 설정
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// 라우팅
app.get("/", (req, res) => {
  res.render("index");
});

// 서버 실행
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
