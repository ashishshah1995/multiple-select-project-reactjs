const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");

// @ Get All Products

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// @ Add A Product

router.post("/", async (req, res) => {
  try {
    if (!req.body.name) {
      res.status(400).json({ message: "Please Add Product Name" });
    }

    const product = Product.create({
      name: req.body.name,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
