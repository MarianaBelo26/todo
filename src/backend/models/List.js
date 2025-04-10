const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
      text: String,
      isCompleted: Boolean
})

const ListSchema = new mongoose.Schema({
      name: String,
      tasks: [TaskSchema],
      deviceId: String
})

const List = mongoose.model('List', ListSchema)

module.exports = List
