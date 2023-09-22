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
    // Recipe.create(data);  Iteration 2
    return Recipe.insertMany(data)
  })
  .then((recipes) => {
    recipes.forEach(recipe => console.log(recipe.title))
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, { duration: 100 }, {new: true}) // Iteration 4, findOneAndUpdate(arg1 = condition, arg2 = updated)
  })
  .then((rigatoni) => {
    console.log("rigatoni successfully updated: ", rigatoni)
    return Recipe.deleteOne({title: "Carrot Cake"})//Iteration 5
  })
  .then((deleted) => {
    console.log("A success message", deleted)
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  })
;

//Close the connection
mongoose.connection.close(); 
//Iteration 6




