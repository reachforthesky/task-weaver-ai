const Task = require('../models/Task');
const mongoose = require('mongoose');

exports.createTask = async (taskData) => {
  const task = new Task(taskData);
  // Check if parentId is present and validate it
  if (taskData.parentId) {
      const parentExists = await checkTaskExists(taskData.parentId);
      if (!parentExists) {
          throw new Error("Parent ID is invalid or does not exist");
      }
  }
  return await task.save();
};

async function checkTaskExists(taskId) {
  
  // Check if taskId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(taskId)) 
    return false;

  const objId = new mongoose.Types.ObjectId(taskId);
  const count = await Task.countDocuments({ _id: objId });
  return count > 0;
}

exports.getTopLevelTasks = async () => {
  return Task.find({ "parentId" : { "$exists" : false } } )
}