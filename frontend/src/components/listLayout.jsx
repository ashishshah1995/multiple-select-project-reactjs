import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DropDown from "./DropDown";
import AddModal from "./AddModal";

const ListLayout = ({
  name,
  items,
  selectedItems,
  setSelectedItems,
  subHeading,
  selectedSubCategories,
  setSelectedSubCategories,
  selectedSubProducts,
  setSelectedSubProducts,
  isSubProduct,
  showSubProduct,
  value,
  setValue,
  saveItem,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  // @ Funtion to manage state of selected Items

  const handleClick = (name) => {
    if (selectedItems.includes(name)) {
      setSelectedItems(
        selectedItems.filter((value) => {
          return value != name;
        })
      );
    } else {
      setSelectedItems((arr) => [...arr, name]);
    }
  };

  function isSelected(name) {
    return selectedItems.includes(name);
  }

  // @ Search Functionality
  const [searchFn, setSearchFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  // @ Funtion to filter items after Search
  const handleSearch = (e) => {
    let target = e.target;
    setSearchFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  return (
    <div>
      <div>
        <div style={{ padding: "10px 20px" }}>
          <TextField
            label={`Search ${name}`}
            placeholder={`Search ${name}`}
            fullWidth
            onChange={handleSearch}
          />
        </div>
        {/* First we get all the products to be shown then when a user selects 
        a product we click to get sub categories we get all the subcatogories which have the selected
        product as the parent from subCategory.jsx and the same goes for the sub products */}
        <List>
          {searchFn.fn(items).map((item) => (
            <div key={item._id}>
              {/* whenever a item is selected we maintain its state and updated it  */}
              <ListItemButton
                onClick={() => {
                  handleClick(item.name);
                }}
              >
                <ListItemText>{item.name}</ListItemText>
                {isSelected(item.name) && <DoneIcon />}
              </ListItemButton>
              {/* Drop down is shown when a product is selcted then in the dropdown we specify
                to show sub categories or when a sub category is selected then in dropdown we show sub products */}
              {!isSubProduct && isSelected(item.name) && (
                <DropDown
                  subHeading={subHeading}
                  selectedSubCategories={selectedSubCategories}
                  setSelectedSubCategories={setSelectedSubCategories}
                  selectedSubProducts={selectedSubProducts}
                  setSelectedSubProducts={setSelectedSubProducts}
                  parentId={item._id}
                  isSubProduct={isSubProduct}
                  showSubProduct={showSubProduct}
                />
              )}
              <Divider />
            </div>
          ))}
        </List>
      </div>
      <div style={{ padding: "5px 10px" }}>
        <Button variant="contained" fullWidth onClick={handleOpen}>
          + Add a {name}
        </Button>
      </div>

      {/* Model to add a new Item */}

      <AddModal
        name={name}
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
        saveItem={saveItem}
      />
    </div>
  );
};

export default ListLayout;
