const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home", { title: "Home", body: "Test" });
});

router.get("/AboutMe", (req, res) => {
  res.render("About Me", { title: "About Me", body: "Test" });
});

router.get("/ContactMe", (req, res) => {
  res.render("Contact Me", { title: "Contact Me", body: "Test" });
});

router.get("/Projects", (req, res) => {
  res.render("Projects", { title: "Projects", body: "Test" });
});

module.exports = router;