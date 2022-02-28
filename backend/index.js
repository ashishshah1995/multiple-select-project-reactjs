const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

// @ Connect to the Database

connectDB();

// @ Intilaize Express Server

const app = express();

// @ Express Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @ For CORS

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// @ API Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/subcategories", require("./routes/subCategoryRoutes"));
app.use("/api/subproducts", require("./routes/subProductRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
