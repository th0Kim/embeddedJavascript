const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const chokidar = require("chokidar");

const app = express();

// LiveReload 설정
const liveReloadServer = livereload.createServer();
liveReloadServer.watch([
  path.join(__dirname, "public"), // 정적 파일 감시
]);

// chokidar로 views 디렉토리 감시
chokidar.watch(path.join(__dirname, "views/**/*.*")).on("change", () => {
  liveReloadServer.refresh("/");
});

// LiveReload 미들웨어
app.use(connectLivereload());

// EJS 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 라우팅
app.get("/", (req, res) => {
  res.render("index");
});

// 서버 실행
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
