"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoard = exports.removeBoard = exports.createBoard = exports.getBoard = exports.getAllBoards = void 0;
const uuid_1 = require("uuid");
const task_memory_repository_1 = __importDefault(require("../tasks/task.memory.repository"));
const board_model_1 = require("./board.model");
const boards = [];
const getAllBoards = async () => boards.filter((entity) => entity);
exports.getAllBoards = getAllBoards;
const getBoard = async (boardId) => boards.filter((board) => board.id === boardId)[0];
exports.getBoard = getBoard;
const createBoard = async (body) => {
    const boardId = uuid_1.v4();
    const newBoard = {
        id: boardId,
        ...body
    };
    boards.push(new board_model_1.Board({ ...newBoard }));
    return boards.filter(board => board.id === boardId)[0];
};
exports.createBoard = createBoard;
const removeBoard = async (boardId) => {
    const boardIndex = boards.findIndex(board => board.id === boardId);
    // const updateTasks = tasks.filter(task => task.boardId !== boardId);
    // tasks = updateTasks;
    task_memory_repository_1.default.forEach((task, index) => {
        if (task.boardId === boardId) {
            console.log('tasks[index]', task_memory_repository_1.default[index]);
            task_memory_repository_1.default[index].boardId = undefined;
        }
    });
    return boards.splice(boardIndex, 1);
};
exports.removeBoard = removeBoard;
const updateBoard = async (boardId, body) => {
    const boardIndex = boards.findIndex(board => board.id === boardId);
    boards[boardIndex] = { id: boardId, ...body };
    return boards[boardIndex];
};
exports.updateBoard = updateBoard;
