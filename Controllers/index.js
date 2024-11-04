const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home", { title: "Home", body: "Home" });
});

router.get("/AboutMe", (req, res) => {
  res.render("About Me", { title: "About Me", body: "About Me" });
});

router.get("/ContactMe", (req, res) => {
  res.render("Contact Me", { title: "Contact Me", body: "Contact Me" });
});

router.get("/Projects", (req, res) => {
  res.render("Projects", { title: "Projects", body: "Projects" });
});

module.exports = router;