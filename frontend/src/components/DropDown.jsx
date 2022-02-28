import { Typography, Collapse } from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SubCategory from "./SubCategory";
import SubProduct from "./SubProduct";

const DropDown = ({
  subHeading,
  selectedSubCategories,
  setSelectedSubCategories,
  selectedSubProducts,
  setSelectedSubProducts,
  parentId,
  isSubProduct,
  showSubProduct,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 20px",
          alignItems: "center",
          cursor: "pointer",
          background: "#424242 ",
          color: "#fff",
        }}
        onClick={handleClick}
      >
        <Typography variant="body1">{subHeading}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {!showSubProduct ? (
          <SubCategory
            selectedSubCategories={selectedSubCategories}
            setSelectedSubCategories={setSelectedSubCategories}
            selectedSubProducts={selectedSubProducts}
            setSelectedSubProducts={setSelectedSubProducts}
            parentId={parentId}
          />
        ) : (
          <SubProduct
            selectedSubProducts={selectedSubProducts}
            setSelectedSubProducts={setSelectedSubProducts}
            parentId={parentId}
          />
        )}
      </Collapse>
    </div>
  );
};

export default DropDown;
