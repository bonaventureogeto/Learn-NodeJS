const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/product-catalog", {
  useNewUrlParser: true,
});

// Define Product Schema and Model (using Mongoose)
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
});
const Product = mongoose.model("Product", productSchema);

// Define API Routes
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const { name, description, price, category } = req.body;
  const product = new Product({ name, description, price, category });
  const result = await product.save();
  res.json(result);
});

// Add routes for updating and deleting products

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
