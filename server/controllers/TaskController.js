const Task = require('../models/Task');
const TaskRepository = require('../repositories/TaskRepository');

exports.createTask = async (req, res) => {
  try {
    const newTask = await TaskRepository.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTopLevelTasks = async (req, res) => {
  try {
    const allTopTasks = await TaskRepository.getTopLevelTasks();
    res.status(201).json(allTopTasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
