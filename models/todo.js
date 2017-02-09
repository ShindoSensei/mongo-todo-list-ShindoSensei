// Mongoose Schema and Models goes here
const mongoose = require('mongoose') // Mongoose Helps to connect to the database

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5
  },
  description: {
    type: String,
    default: 'Default Description'
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('Todo', todoSchema)  // Map todoSchema with model name

module.exports = Todo
