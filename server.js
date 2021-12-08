// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

//Requiring npm modules
const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");

//Setting paths and dependencies
// app.set("view-engine", "ejs");
// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "./public/views"));
// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(require("cors")());

//Database Connection
// const mongoose = require("mongoose");

//Auth

app.use(
  session({
    secret: "Chemmer",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  console.log("In / Route");

  res.json({
    data: "firstRoute",
  });
});

app.get("/testRoute", (req, res) => {
  console.log("In /test Route");
  res.json({
    data: "Hello",
  });
});

//Importing Routers

//Using Routers

//Server Started
app.listen(process.env.PORT || 8000, () => {
  console.log("Server listening on PORT 8000");
});
