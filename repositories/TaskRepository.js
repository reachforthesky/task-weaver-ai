const Task = require('../models/Task');

exports.createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

exports.addSubtask = async (taskId, subtaskData) => {
  const subtask = new Task(subtaskData);
  await subtask.save();
  return await Task.findByIdAndUpdate(taskId, { $push: { subtasks: subtask._id } }, { new: true });
};