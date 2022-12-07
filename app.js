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
<<<<<<< HEAD
=======
const artistsRoute = require("./routes/artists");
// const artistsModel = require("./models/artists");
>>>>>>> 4cc677777c70d0500834dca52c1f751f925b3a28

// Setting the views of the application
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// Setting the static folder of the application
app.use(express.static(path.join(__dirname, "public")));

// Using the routes of the application
app.use("/", indexRoute);
<<<<<<< HEAD
=======
app.use("/artists", artistsRoute);

// // Using the models of the application
// (async () => {
//   app.use("/", artistsModel);
//   await db.sync();
// })();
>>>>>>> 4cc677777c70d0500834dca52c1f751f925b3a28

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
