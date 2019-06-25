// This is the Blogpost database!!
const mongoose = require("mongoose");
const { Schema } = mongoose;
const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  summery: String,
  display: String,
  // Creates reference to user DB
  _user: { type: Schema.Types.ObjectId, ref: "user" },
  date: Date
});
console.log("created blog dataBase");
mongoose.model("Blog", blogSchema);
