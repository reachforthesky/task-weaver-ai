const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.post('/tasks', TaskController.createTask);

router.get('/tasks/getTopTasks', TaskController.getTopLevelTasks)

module.exports = router;