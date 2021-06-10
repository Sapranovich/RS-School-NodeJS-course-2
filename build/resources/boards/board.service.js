"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoard = exports.removeBoard = exports.createBoard = exports.getBoard = exports.getAllBoards = void 0;
const boardsRepo = __importStar(require("./board.memory.repository"));
/**
 * Get all boards.
 * @returns {Promise<Array>} Array of Board objects.
 */
const getAllBoards = () => boardsRepo.getAllBoards();
exports.getAllBoards = getAllBoards;
/**
 * Get board by id.
 * @param {string} boardId - boadr id.
 * @returns {Promise<Object>} Board object.
 */
const getBoard = (boardId) => boardsRepo.getBoard(boardId);
exports.getBoard = getBoard;
/**
 * Create board
 * @param {object} body - Boadr object.
 * @returns {Promise<Object>} Created Board object.
 */
const createBoard = (body) => boardsRepo.createBoard(body);
exports.createBoard = createBoard;
/**
 * Remove board.
 * @param {string} boardId - board id.
 * @returns {Promise<Object>} Removed Board object.
 */
const removeBoard = (boardId) => boardsRepo.removeBoard(boardId);
exports.removeBoard = removeBoard;
/**
 * Update board.
 * @param {string} boardId - board id.
 * @param {object} body - Board object.
 * @returns {Promise<Object>} Updated Board object.
 */
const updateBoard = (boardId, body) => boardsRepo.updateBoard(boardId, body);
exports.updateBoard = updateBoard;
