const mongoose = require("mongoose");

const ThoughtSchema = mongoose.Schema({
  thought: String,
  created_at: Date,
});

const Thought = mongoose.model("Thought", ThoughtSchema);
module.exports = Thought;
