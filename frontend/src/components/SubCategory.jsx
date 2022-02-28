import React, { useEffect, useState } from "react";
import ListLayout from "./listLayout";

import axios from "axios";
import { BACKEND_URL } from "../config";

const SubCategory = ({
  parentId,
  selectedSubCategories,
  setSelectedSubCategories,
  selectedSubProducts,
  setSelectedSubProducts,
}) => {
  const [subCategories, setSubCategories] = useState([]);

  const [value, setValue] = useState("");

  // @ Function to add a new Sub Category

  const saveItem = async () => {
    await axios
      .post(`${BACKEND_URL}/subcategories`, {
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

  // @ Funtion to get Sub Categories of selected product

  const getData = async () => {
    await axios
      .get(`${BACKEND_URL}/subcategories/${parentId}`)
      .then(function (response) {
        setSubCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, [subCategories]);

  return (
    <div style={{ margin: "0px 20px", background: "#90caf9" }}>
      <ListLayout
        name="Sub Category"
        items={subCategories}
        selectedItems={selectedSubCategories}
        setSelectedItems={setSelectedSubCategories}
        subHeading="Sub Products"
        selectedSubProducts={selectedSubProducts}
        setSelectedSubProducts={setSelectedSubProducts}
        isSubProduct={false}
        showSubProduct={true}
        value={value}
        setValue={setValue}
        saveItem={saveItem}
      />
    </div>
  );
};

export default SubCategory;
