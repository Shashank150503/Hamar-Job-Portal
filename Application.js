const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  status: { type: String, default: "applied" }
});

module.exports = mongoose.model("Application", appSchema);
