const mongoose = require("mongoose");
const { Schema } = mongoose;
const imageSchema = new Schema({
  path: { type: String },
  caption: { type: String }
});
console.log("created Images dataBase");
mongoose.model("Images", imageSchema);
