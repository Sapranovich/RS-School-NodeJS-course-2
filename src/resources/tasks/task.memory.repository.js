const BD = require('../../db/db');

const getAllTasks = async (boardId) => {
  const data = await BD.getAllTasks(boardId);
  return data
}
const getTask = async (boardId, taskId) => {
  const task = await BD.getTask(boardId, taskId);
  return task
}

const createTask = async (body) => {
   const task = await BD.createTask(body);
   return task;
}

module.exports = {
    getAllTasks,
    getTask,
    createTask
}