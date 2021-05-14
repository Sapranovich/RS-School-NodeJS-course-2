const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoard = (boardId) => boardsRepo.getBoard(boardId); 

const createBoard = (body) => boardsRepo.createBoard(body); 

const removeBoard = (boardId) => boardsRepo.removeBoard(boardId);

const updateBoard = (boardId, body) => boardsRepo.updateBoard(boardId, body);

module.exports = { getAllBoards, getBoard, createBoard, removeBoard, updateBoard };