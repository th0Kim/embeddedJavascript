const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index"); // 메인 페이지
});

module.exports = router;
