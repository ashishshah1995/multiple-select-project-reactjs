import { useState } from "react";
import "./App.css";
import DetailModal from "./components/DetailModal";
import Products from "./components/Products";
function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [selectedSubProducts, setSelectedSubProducts] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <div className="AppContainer">
      <div className="App">
        <Products
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          selectedSubCategories={selectedSubCategories}
          setSelectedSubCategories={setSelectedSubCategories}
          selectedSubProducts={selectedSubProducts}
          setSelectedSubProducts={setSelectedSubProducts}
          setOpen={setOpen}
        />

        {/* Model to show the selected items */}

        <DetailModal
          open={open}
          setOpen={setOpen}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          selectedSubCategories={selectedSubCategories}
          setSelectedSubCategories={setSelectedSubCategories}
          selectedSubProducts={selectedSubProducts}
          setSelectedSubProducts={setSelectedSubProducts}
        />
      </div>
    </div>
  );
}

export default App;
