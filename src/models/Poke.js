const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate");

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
//PokeSchema.plugin(mongoosePaginate);
mongoose.model('Pokemon', PokeSchema);
