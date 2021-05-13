const taskRepo = require('./task.memory.repository');

const getAllTasks = (boardId) => taskRepo.getAllTasks(boardId);

const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);
module.exports = {
    getAllTasks,
    getTask
}