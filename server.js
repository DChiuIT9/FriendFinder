var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
// var PORT = 3000;
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/public/home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/public/survey.html"));
// });

// Displays all friends
// app.get("/api/friends", function(req, res) {
//   return res.json(friends);
// });


// Create New Characters - takes in JSON input
// app.post("/api/friends", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newfriend = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newfriend.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newfriend);

//   characters.push(newfriend);

//   res.json(newfriend);
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
