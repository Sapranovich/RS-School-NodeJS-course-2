const BD = require('../../db/db');

const getAllTasks = async (boardId) => {
  const data = await BD.getAllTasks(boardId);
  return data
}

module.exports = {
    getAllTasks
}