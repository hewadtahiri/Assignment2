const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home", { title: "Home", body: "<%- include('Home') %>" });
});

router.get("/AboutMe", (req, res) => {
  res.render("About Me", { title: "About Me", body: "<%- include('About Me') %>" });
});

router.get("/ContactMe", (req, res) => {
  res.render("Contact Me", { title: "Contact Me", body: "<%- include('Contact Me') %>" });
});

router.get("/Projects", (req, res) => {
  res.render("Projects", { title: "Projects", body: "<%- include('Projects') %>" });
});

module.exports = router;