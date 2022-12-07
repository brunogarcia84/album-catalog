const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 5000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variables for the modules
const indexRoute = require("./routes/index");

// Setting the views of the application
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// Setting the static folder of the application
app.use(express.static(path.join(__dirname, "public")));

// Using the routes of the application
app.use("/", indexRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
