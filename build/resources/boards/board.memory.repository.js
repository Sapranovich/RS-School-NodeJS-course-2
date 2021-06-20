"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoard = exports.removeBoard = exports.createBoard = exports.getBoard = exports.getAllBoards = void 0;
const board_model_1 = require("./board.model");
const task_model_1 = require("../tasks/task.model");
const getAllBoards = async () => board_model_1.Board.find();
exports.getAllBoards = getAllBoards;
const getBoard = async (boardId) => board_model_1.Board.findOne({ id: boardId });
exports.getBoard = getBoard;
const createBoard = async (body) => {
    const board = new board_model_1.Board(body);
    await board.save();
    return board;
};
exports.createBoard = createBoard;
const removeBoard = async (boardId) => {
    const timber = await board_model_1.Board.findOne({ id: boardId });
    if (timber) {
        await timber.remove();
        const updateTasks = await task_model_1.Task.find({ boardId: boardId });
        updateTasks.forEach(task => {
            task.boardId = null;
            task.save();
        });
        return true;
    }
    return false;
};
exports.removeBoard = removeBoard;
const updateBoard = async (boardId, body) => {
    const board = await board_model_1.Board.findOne({ id: boardId });
    if (!board) {
        throw new Error('User not found');
    }
    await board_model_1.Board.update(boardId, body);
    return board_model_1.Board.findOne(boardId);
};
exports.updateBoard = updateBoard;
