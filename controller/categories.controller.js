const mongoose = require("mongoose");
const categories = require("../data/categories");
const Category = require("../models/categories.model");

//seed category database
async function seedCategoriesDatabase() {
  try {
    for (const category of categories) {
      const { img, categoryName, description } = category;
      const newCategory = new Category({ img, categoryName, description });
      await newCategory.save();
      console.log(`New ${categoryName} category added`);
    }
    console.log("Categroy database seeded successfully");
  } catch (error) {
    console.error("Error while seeding category database " + error);
  } finally {
    mongoose.disconnect();
  }
}
// seedCategoriesDatabase();

//get all categories
const readAllCategories = async () => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    throw error;
  }
};

//get a category by id
const readCategoryById = async (categoryId) => {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  seedCategoriesDatabase,
  readAllCategories,
  readCategoryById,
};
