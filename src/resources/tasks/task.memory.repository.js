const BD = require('../../db/db');

const getAllTasks = async (boardId) => {
  const data = await BD.getAllTasks(boardId);
  return data
}
const getTask = async (boardId, taskId) => {
  const task = await BD.getTask(boardId, taskId);
  return task
}

const createTask = async (boardId, body) => {
  const task = await BD.createTask(boardId, body);
  return task;
}

const removeTask = async (taskId) => {
  const resault = await BD.removeTask(taskId);
  return resault;
}

const updateTask = async (taskId, body) => {
  const task = await BD.updateTask(taskId, body);
  return task;
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    removeTask,
    updateTask
}