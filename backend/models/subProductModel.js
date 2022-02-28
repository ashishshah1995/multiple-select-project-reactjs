const mongoose = require("mongoose");

const subProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SubProduct", subProductSchema);
