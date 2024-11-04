const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home", { title: "Home", body: "" });
});

router.get("/AboutMe", (req, res) => {
  res.render("About Me", { title: "About Me", body: "" });
});

router.get("/ContactMe", (req, res) => {
  res.render("Contact Me", { title: "Contact Me", body: "" });
});

router.get("/Projects", (req, res) => {
  res.render("Projects", { title: "Projects", body: "" });
});

module.exports = router;