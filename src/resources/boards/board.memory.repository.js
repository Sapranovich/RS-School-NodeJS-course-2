const BD = require('../../db/db');

const getAllBoards = async () => {
  const data = await BD.getAllBoards();
  return data
};

module.exports = { getAllBoards };