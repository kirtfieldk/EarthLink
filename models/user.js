const MongoClient = require("mongoose");
const { Schema } = MongoClient;
const userSchema = new Schema({
  userId: String
});
MongoClient.model("users", userSchema);
