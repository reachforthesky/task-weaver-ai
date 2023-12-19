const TaskRepository = require('../repositories/TaskRepository');

exports.createTask = async (req, res) => {
  try {
    const newTask = await TaskRepository.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addSubtask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const subtaskData = req.body;
    const updatedTask = await TaskRepository.addSubtask(taskId, subtaskData);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
};