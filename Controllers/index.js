const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Layout", { title: "Home", body: "<%- include('Home') %>" });
});

router.get("/AboutMe", (req, res) => {
  res.render("Layout", { title: "About Me", body: "<%- include('About Me') %>" });
});

router.get("/ContactMe", (req, res) => {
  res.render("Layout", { title: "Contact Me", body: "<%- include('Contact Me') %>" });
});

router.get("/Projects", (req, res) => {
  res.render("Layout", { title: "Projects", body: "<%- include('Projects') %>" });
});

module.exports = router;