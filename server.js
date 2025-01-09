// server.js
const express = require("express"); // express 모듈을 사용하기 위한 express 객체 생성
const path = require("path"); // 경로 설정을 위한 path 모듈
const sassMiddleware = require("node-sass-middleware"); // sass 파일을 css 파일로 변환하기 위한 node-sass-middleware 모듈

const app = express(); // express 모듈을 사용하기 위한 express 객체 생성

// Sass 미들웨어 설정
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public/scss"), // SCSS 파일 경로
    dest: path.join(__dirname, "public/css"), // CSS 파일 출력 경로
    debug: true, // 디버그 로그 활성화
    outputStyle: "compressed", // CSS 출력 형식: nested, expanded, compact, compressed
    prefix: "/css", // URL 경로에서 /css로 제공
  })
);

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
