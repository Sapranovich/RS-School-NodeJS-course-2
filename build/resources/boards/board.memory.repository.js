"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoard = exports.removeBoard = exports.createBoard = exports.getBoard = exports.getAllBoards = void 0;
const board_model_1 = require("./board.model");
const typeorm_1 = require("typeorm");
const task_model_1 = require("../tasks/task.model");
function boardInFormat(board) {
    const resault = {
        ...board,
        columns: JSON.parse(board.columns)
    };
    return resault;
}
const getAllBoards = async () => {
    return (await board_model_1.Board.find()).map(board => boardInFormat(board));
};
exports.getAllBoards = getAllBoards;
const getBoard = async (boardId) => {
    const board = await board_model_1.Board.findOne({ id: boardId });
    if (!board) {
        return false;
    }
    return boardInFormat(board);
};
exports.getBoard = getBoard;
const createBoard = async (body) => {
    const board = new board_model_1.Board(body);
    await board.save();
    return boardInFormat(board);
};
exports.createBoard = createBoard;
const removeBoard = async (boardId) => {
    const task = await typeorm_1.getRepository(board_model_1.Board).delete(boardId);
    if (task) {
        await typeorm_1.getRepository(task_model_1.Task).delete({ boardId: boardId });
        return true;
    }
    return false;
};
exports.removeBoard = removeBoard;
const updateBoard = async (boardId, body) => {
    const board = await board_model_1.Board.findOne(boardId);
    if (!board) {
        throw new Error('User not found');
    }
    const updateBody = {
        ...body,
        columns: JSON.stringify(body.columns)
    };
    await board_model_1.Board.update(boardId, updateBody);
    return board_model_1.Board.findOne(boardId);
};
exports.updateBoard = updateBoard;
