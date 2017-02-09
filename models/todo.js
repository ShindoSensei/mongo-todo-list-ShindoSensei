// Mongoose Schema and Models goes here
const mongoose = require('mongoose') // Mongoose Helps to connect to the database

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)  // Map todoSchema with model name

module.exports = Todo
