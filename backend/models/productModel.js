const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Product", productSchema);
