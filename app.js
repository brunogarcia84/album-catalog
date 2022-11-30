const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 5000;

// Getting the root index of the application from the views folder
const indexRoute = require("./routes/index");

// Connecting to database
(async () => {
  const db = require("./db");
  await console.log(`Connected to database`);
  await db.sync();
})();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
