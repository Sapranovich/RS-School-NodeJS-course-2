const router = require('express').Router();
const taskService = require('./task.service');


router.route('/:boardId/tasks').get(async (req, res) => {
  const {boardId} = req.params;
  const tasks = await taskService.getAllTasks(boardId);
  res.json(tasks);
})

router.route('/:taskId').get(async () => {

})

router.route('/').post(async () => {

})

router.route('/:taskId').put(async () => {

})

router.route('/:taskId').delete(async () => {

})

module.exports = router;