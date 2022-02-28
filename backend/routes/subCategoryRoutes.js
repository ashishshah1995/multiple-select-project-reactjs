const express = require("express");
const router = express.Router();

const SubCategory = require("../models/subCategoryModel");

// @ Get Sub Categories

router.get("/:id", async (req, res) => {
  try {
    const subcategories = await SubCategory.find({
      parentId: req.params.id,
    });
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @ Add A Sub Category

router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.parentId) {
      res.status(400).json({ message: "Please Add Item Data" });
    }

    const subcategory = SubCategory.create({
      name: req.body.name,
      parentId: req.body.parentId,
    });
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
