import React, { useEffect, useState } from "react";
import ListLayout from "./listLayout";

import axios from "axios";
import { BACKEND_URL } from "../config";

const SubProduct = ({
  parentId,
  selectedSubProducts,
  setSelectedSubProducts,
}) => {
  const [subProducts, setSubProducts] = useState([]);

  const [value, setValue] = useState("");

  // @ Function to add a new Sub Product

  const saveItem = async () => {
    await axios
      .post(`${BACKEND_URL}/subproducts`, {
        name: value,
        parentId: parentId,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // @ Funtion to get Sub Products of selected  Sub Category

  const getData = async () => {
    await axios
      .get(`${BACKEND_URL}/subproducts/${parentId}`)
      .then(function (response) {
        setSubProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, [subProducts]);

  return (
    <div style={{ margin: "0px 10px", background: "#bdbdbd" }}>
      {/* Specifying to show all the sub products of selected sub category */}
      <ListLayout
        name="Sub Product"
        items={subProducts}
        selectedItems={selectedSubProducts}
        setSelectedItems={setSelectedSubProducts}
        isSubProduct={true}
        value={value}
        setValue={setValue}
        saveItem={saveItem}
      />
    </div>
  );
};

export default SubProduct;
