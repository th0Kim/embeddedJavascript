const express = require("express");
const router = express.Router();

router.get("/main", (req, res) => {
  res.render("main");
});

router.get("/subpage01", (req, res) => {
  res.render("subpage01");
});

router.get("/subpage02", (req, res) => {
  res.render("subpage02");
});

module.exports = router;
