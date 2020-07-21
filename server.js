// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var db = require("./models")
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener

var PORT = process.env.PORT || 8080;

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('assets'));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

db.sequelize.sync().then(function () {
  db.Owner.create(
    {
      name: "Diana",
      photo: "",
      city: "Kansas",
      state: "KS",
      email: "diana@earthlink.com",
      duration: "3",
      quantity: 3,
      size: "3",
      temperament: "3",

    },
  ).then();


  db.Sitter.create(
    {
      name: "Diana",
      photo: "",
      city: "Kansas",
      state: "KS",
      email: "diana@earthlink.com",
      duration: "3",
      quantity: 3,
      size: "3",
      temperament: "3",

    },
  ).then();


  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

