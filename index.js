const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

const path = require("path");
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI);
// The models for the database
require("./models/User");
require("./models/Blog");
//
require("./Service/passport");

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./Routes/AuthRoutes")(app);
require("./Routes/upload")(app);
if (process.env.NODE_ENV === "production") {
  //Express will serve up production assessts like main.js
  //If there is a rounr Express knows nothing about go here
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Started"));
