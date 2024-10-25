const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

router.get("/About Me", (req, res) => {
  res.render("About Me", { title: "About Me" });
});

router.get("/Projects", (req, res) => {
  res.render("Projects", { title: "Projects" });
});

router.get("/Contact Me", (req, res) => {
  res.render("Contact Me", { title: "Contact Me" });
});

module.exports = router;