const mongoose = require("mongoose");

const PokeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  altura: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
mongoose.model('Pokemon', PokeSchema);
