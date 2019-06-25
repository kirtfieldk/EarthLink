// This is the login user dataBase.
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  userId: String,
  name: String,
  email: String
});
console.log("created users dataBase");
mongoose.model("users", userSchema);
