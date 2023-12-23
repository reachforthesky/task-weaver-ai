const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 1000
  },
  completed: {
    type: Boolean,
    required: true
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }
});

module.exports = mongoose.model('Task', TaskSchema);