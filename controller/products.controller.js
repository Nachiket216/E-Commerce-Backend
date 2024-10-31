const mongoose = require("mongoose");
const products = require("../data/products");
const Product = require("../models/products.model");

//seed products database
const seedProductsDatabase = async () => {
  try {
    for (const product of products) {
      const {
        _id,
        image,
        category,
        rating,
        description,
        title,
        original_price,
        price,
        delivery_time,
        reviews,
        in_stock,
      } = product;

      const newProduct = new Product({
        _id,
        image,
        category,
        rating,
        description,
        title,
        original_price,
        price,
        delivery_time,
        reviews,
        in_stock,
      });

      await newProduct.save();
      console.log(`New Product ${title} added`);
    }
    console.log("Products data seeded successfully");
  } catch (error) {
    console.log("Error while seeding products database", error);
  } finally {
    mongoose.disconnect();
  }
};

//get all products
async function readAllProducts() {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw error;
  }
}

// get a product by id
async function readProductById(productId) {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = { seedProductsDatabase, readAllProducts, readProductById };
