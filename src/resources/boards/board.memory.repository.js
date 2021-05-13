const BD = require('../../db/db');

const getAllBoards = async () => {
  const data = await BD.getAllBoards();
  return data
};

const getBoard = async (boardId) => {
  const board = await BD.getBoard(boardId);
  return board;
}

module.exports = { getAllBoards, getBoard };