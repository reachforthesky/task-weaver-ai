const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.post('/tasks', TaskController.createTask);
router.post('/tasks/:taskId/subtasks', TaskController.addSubtask);

module.exports = router;