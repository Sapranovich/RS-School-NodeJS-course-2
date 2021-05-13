const taskRepo = require('./task.memory.repository');

const getAllTasks = (boardId) => taskRepo.getAllTasks(boardId);

module.exports = {
    getAllTasks
}