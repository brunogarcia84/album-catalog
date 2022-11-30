const express = require("express");
const router = express.Router();
// const Artists = require("../models/artists");

// Getting all artists
router.get("/", (req, res) => {
  res.render("artists/index"); // Rendering the specific index page for all artists
});

// Displaying the form for new artist
router.get("/new", (req, res) => {
  res.render("artists/new"); // Rendering the page with the form for creating a new artist
});

// Creating a new artist
router.post("/", (req, res) => {
  res.send("Creating a new artist");
});

module.exports = router;
