const router = require('express').Router();
const taskService = require('./task.service');


router.route('/:boardId/tasks').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllTasks(boardId);
  res.status(200).json(tasks);
})

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
    const { boardId, taskId } = req.params;
    const task = await taskService.getTask(boardId, taskId);
    if(task) {
      res.status(200).json(task);
    } else {
      res.status(404).json('Not Found');
    }
})

router.route('/:boardId/tasks').post(async (req, res) => {
  const { body, params:{ boardId } } = req;
  const task = await taskService.createTask(boardId, body);
  res.status(201).json(task);
})

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const { body, params:{ taskId } } = req;
  const task = await taskService.updateTask(taskId, body);
  res.status(200).json(task);
})

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  if(await taskService.removeTask(taskId)) res.status(204).json();
})

module.exports = router;