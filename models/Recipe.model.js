const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({

  title: {
    type: String,
    require: true,
    unique: true,
  },

  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },

  ingredients: {
    type: [String], //shortcut, ingredients: [String]
  },

  cuisine:{
    type: String,
    require: true,
  },

  dishType: {
    type: String,
    enum: ["breakfast", "main_course", "soup", "snack", "drink", "dessert", 'other'],
  },

  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  }, //in MongoDB, we typically store images as URL strings. Cloudinary allows us to upload images and obtain the URL string.

  duration: {
    type: Number,
    min: 0
  },

  creator: {
    type: String //no need to have curly braces; creator: String
  },

  created: {
    type: Date,
    default: Date.now,
  },
})


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
