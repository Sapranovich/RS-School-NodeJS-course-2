const BD = require('../../common/db');

const getAllBoards = async () => {
  const data = await BD.getAllBoards();
  return data
};

const getBoard = async (boardId) => {
  const board = await BD.getBoard(boardId);
  return board;
}

const createBoard = async (body) => {
  const board = await BD.createBoard(body);
  return board;
} 

const removeBoard = async (boardId) => {
  const resault = await BD.removeBoard(boardId);
  return resault;
}

const updateBoard = async (boardId, body) => {
   const board = await BD.updateBoard(boardId, body);
   return board;
}

module.exports = { getAllBoards, getBoard, createBoard, removeBoard, updateBoard };