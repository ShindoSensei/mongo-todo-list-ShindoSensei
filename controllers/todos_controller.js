// TODO. import TODO Model ;-)
// const Todo = require('../models/todo')

// const mongoose = require('mongoose')   ////No need!!
// mongoose.connect('mongodb://localhost/todo')  //No need! Open connection once will do!Already done that at
// mongoose.Promise = global.Promise
const Todo = require('../models/todo.js')

function create (params) {
  // create a new TODO and console log the response
  Todo.create(params, function (err, doc) {
    if (err) {
      console.log(err)
      return
    }
    console.log(doc)
  })
}

function list () {
  // console log the list of all TODOs
  Todo.find({}, function (err, doc) {
    if (err) {
      console.log(err)
      return
    }
    console.log(doc)
  })
}

function show (id) {
  // find the TODO with this id and console log it
  Todo.findById(id, function (err, doc) {
    if (err) {
      console.log(err)
      return
    }
    console.log(doc)
  })
}

function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
  Todo.findByIdAndUpdate(id, params, {new: true}, function (err, doc) {
    if (err) {
      console.log(err)
      return
    }
    console.log(doc)
  })
}

function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
  Todo.findByIdAndRemove(id, function (err, doc) {
    if (err) {
      console.log(err)
    }

    if (doc) {
      console.log(doc)
    } else { console.log('Destruction was not executed') }
  })
}

function destroyAll (id) {
  Todo.remove({}, function (err, doc) {
    if (err) {
      console.log(err)
      return
    }
    console.log("Everything destroyed")
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
