const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  roomNumber: Number,
  isAvailable: Boolean,
});

module.exports = mongoose.model("Rooms", roomSchema, "rooms");
