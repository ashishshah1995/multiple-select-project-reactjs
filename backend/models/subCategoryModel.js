const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
