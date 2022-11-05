const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  name: String,
  age: Number,
  sexe: String,
  password: String,
  counselor: Boolean,
});

module.exports = mongoose.model("User", userSchema, "users");
