const express = require("express");
const router = express.Router();

// Getting the home page of the application
router.get("/", (req, res) => {
  res.render("index");
});

// Middleware for error treatment
router.use((error, req, res, next) => {
  if (error.status !== 404) console.log(error.stack);
  res.status(error.status || 500).json({ error: error.message });
});

module.exports = router;
