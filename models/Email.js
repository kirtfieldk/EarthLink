// This is adding user to newsLetter
const mongoose = require("mongoose");
const { Schema } = mongoose;
const email = new Schema({
  newsLetterEmail: String,
  display: String
});
console.log("created email dataBase");
mongoose.model("email", email);
