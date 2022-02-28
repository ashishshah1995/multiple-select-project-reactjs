const express = require("express");
const router = express.Router();

const SubProduct = require("../models/subProductModel");

// @ Get Sub Products

router.get("/:id", async (req, res) => {
  try {
    const subproducts = await SubProduct.find({ parentId: req.params.id });
    res.status(200).json(subproducts);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// @ Add a Sub Product

router.post("/", async (req, res) => {
  try {
    if (!req.body.name) {
      res.status(400).json({ message: "Please Add Product Name" });
    }

    const subproduct = SubProduct.create({
      name: req.body.name,
      parentId: req.body.parentId,
    });
    res.status(200).json(subproduct);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
