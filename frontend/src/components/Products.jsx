import React, { useEffect, useState } from "react";
import ListLayout from "./listLayout";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Products = ({
  selectedProducts,
  setSelectedProducts,
  selectedSubCategories,
  setSelectedSubCategories,
  selectedSubProducts,
  setSelectedSubProducts,
  setOpen,
}) => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  // @ Function to add a new Product

  const saveItem = async () => {
    await axios
      .post(`${BACKEND_URL}/products`, {
        name: value,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // @ Funtion to get all the Products

  const getData = async () => {
    await axios
      .get(`${BACKEND_URL}/products`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    getData();
  }, [products]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 10px",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">Products</Typography>
        <Button variant="outlined" onClick={handleOpen}>
          Done
        </Button>
      </div>
      {/* Specifying to show all the products */}
      <ListLayout
        name="Product"
        items={products}
        selectedItems={selectedProducts}
        setSelectedItems={setSelectedProducts}
        subHeading="Sub Categories"
        selectedSubCategories={selectedSubCategories}
        setSelectedSubCategories={setSelectedSubCategories}
        selectedSubProducts={selectedSubProducts}
        setSelectedSubProducts={setSelectedSubProducts}
        isSubProduct={false}
        showSubProduct={false}
        value={value}
        setValue={setValue}
        saveItem={saveItem}
      />
    </div>
  );
};

export default Products;
