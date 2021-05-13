const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoard = (boardId) => boardsRepo.getBoard(boardId); 

module.exports = { getAllBoards, getBoard };