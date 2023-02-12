const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  text: { type: String, required: true },
  date: { type: String },
});

module.exports = mongoose.model("Note", noteSchema);
