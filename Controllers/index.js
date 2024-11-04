const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home");
});

router.get("/AboutMe", (req, res) => {
  res.render("About Me");
});

router.get("/ContactMe", (req, res) => {
  res.render("Contact Me");
});

router.get("/Projects", (req, res) => {
  res.render("Projects");
});

module.exports = router;