const express = require("express");
var app = express();
var mongoose = require("mongoose");
const path = require("path");
var bodyParser = require("body-parser");

//DB Setup

//Import DB models
var db = require("./models");

//Connect to database
var dbURL = process.env.MONGODB_URI || "mongodb://localhost/appgallery";
mongoose.connect(dbURL, {
  useNewUrlParser: true
});

//MIDDLEWARE================================================================

//Allow post requests to be handled
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Serve up the React application
app.use(express.static(path.resolve(__dirname, "build")));

//Find all entries in the collection
app.get("/hit-db", (req, res) => {
  db.App.find({})
    .sort({ isFeatured: -1 })
    .then(function(queryResult) {
      res.json(queryResult);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//Catch all
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// var patientPlus = {
//   title: "Patient Plus",
//   isFeatured: true,
//   isCollaboration: true,
//   deployedLink: "https://patientplus.herokuapp.com/",
//   githubLink: "https://github.com/cafeamericano/UNC-Project02",
//   description:
//     "Manage patients, identify health trends, and schedule appointments with this electronic patient management system. Demonstrates understanding of NodeJS, MySQL, Heroku, Sequelize, Handlebars, Express, Bootstrap, jQuery, Moment, Nodemailer, animate.css, Firebase Authentication, UUID, Materialize, ChartsJS, and Google Charts API.",
//   keywords: [
//     "NodeJS",
//     "MySQL",
//     "JavaScript",
//     "Sequelize",
//     "Nodemailer",
//     "User Authentication",
//     "Express",
//     "HandlebarsJS",
//     "jQuery"
//   ],
//   imagePath: "appImages/patientPlus.png",
//   language: "JavaScript",
//   publishDate: "2019-08-29"
// };

//START SERVER================================================================

db.App.create(patientPlus)

var PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("Server listening on Port " + PORT + "...");
});
