const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');

// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    let newRecipe = {
      title: "BAJ's Recipe",//Brennen Alfonso Jennifer = BAJ
      cuisine: 'Mongo'
    }
    return Recipe.create(newRecipe); //Iteration 2
  })
  .then((newRecipe) => {
    console.log(newRecipe.title)//Iteration 2: print one new recipe title
    return Recipe.insertMany(data)//Iteration 3
    let newRecipe = {
      title: "BAJ's Recipe",//Brennen Alfonso Jennifer = BAJ
      cuisine: 'Mongo'
    }
    return Recipe.create(newRecipe); //Iteration 2
  })
  .then((newRecipe) => {
    console.log(newRecipe.title)//Iteration 2: print one new recipe title
    return Recipe.insertMany(data)//Iteration 3
  })
  .then((multipleRecipes) => {
    multipleRecipes.forEach(recipe => console.log(recipe.title)) //Iteration 3:print multiple recipe titles 
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, { duration: 100 }, {new: true}) // Iteration 4, findOneAndUpdate(arg1 = condition, arg2 = updated)
  .then((multipleRecipes) => {
    multipleRecipes.forEach(recipe => console.log(recipe.title)) //Iteration 3:print multiple recipe titles
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, { duration: 100 }, {new: true}) // Iteration 4, findOneAndUpdate(arg1 = condition, arg2 = updated)
  })
  .then((rigatoni) => {
    console.log("rigatoni successfully updated: ", rigatoni) //Iteration 4: print sucess message
    return Recipe.deleteOne({title: "Carrot Cake"})//Iteration 5: delete
  })
  .then((deleted) => {
    console.log("A success message", deleted)//Iteration 5: print success message
  .then((rigatoni) => {
    console.log("rigatoni successfully updated: ", rigatoni) //Iteration 4: print sucess message
    return Recipe.deleteOne({title: "Carrot Cake"})//Iteration 5: delete
  })
  .then((deleted) => {
    console.log("A success message", deleted)//Iteration 5: print success message
    mongoose.connection.close(); //Close the connection Iteration 6
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  })
;

