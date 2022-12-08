import express from "express";
const app = express();
import expressLayouts from "express-ejs-layouts";
import dotenv from "dotenv";

//Config Dotenv
dotenv.config();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variables for the modules
import indexRoute from "./routes/index.js";

// Setting the views of the application with the template engine EJS
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// Setting the static folder of the application
app.use(express.static("public"));

// Using the routes of the application
app.use("/", indexRoute);

export default app;
