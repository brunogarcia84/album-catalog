const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 5000;

// Variables for the modules
const db = require("./db");
const indexRoute = require("./routes/index");
const artistsRoute = require("./routes/artists");
// const artistsModel = require("./models/artists");

// Setting the views of the application
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// Setting the static folder of the application
app.use(express.static(path.join(__dirname, "public")));

// Using the routes of the application
app.use("/", indexRoute);
app.use("/artists", artistsRoute);

// // Using the models of the application
// (async () => {
//   app.use("/", artistsModel);
//   await db.sync();
// })();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
