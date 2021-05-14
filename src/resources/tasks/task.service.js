const taskRepo = require('./task.memory.repository');

const getAllTasks = (boardId) => taskRepo.getAllTasks(boardId);

const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);

const createTask = (boardId, body) => taskRepo.createTask(boardId, body);

const removeTask = (taskId) => taskRepo.removeTask(taskId);

const updateTask = (taskId, body) => taskRepo.updateTask(taskId, body);

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    removeTask,
    updateTask
}