import {IBoard} from './board.model';
import * as boardsRepo from './board.memory.repository';
/**
 * Get all boards.
 * @returns {Promise<Array>} Array of Board objects.
 */
const getAllBoards = () => boardsRepo.getAllBoards();
/**
 * Get board by id.
 * @param {string} boardId - boadr id. 
 * @returns {Promise<Object>} Board object.
 */
const getBoard = (boardId:string) => boardsRepo.getBoard(boardId); 
/**
 * Create board
 * @param {object} body - Boadr object. 
 * @returns {Promise<Object>} Created Board object.
 */
const createBoard = (body:IBoard) => boardsRepo.createBoard(body); 
/**
 * Remove board.
 * @param {string} boardId - board id. 
 * @returns {Promise<Object>} Removed Board object.
 */
const removeBoard = (boardId:string) => boardsRepo.removeBoard(boardId);
/**
 * Update board.
 * @param {string} boardId - board id.
 * @param {object} body - Board object.
 * @returns {Promise<Object>} Updated Board object.
 */
const updateBoard = (boardId:string, body:IBoard) => boardsRepo.updateBoard(boardId, body);

export { getAllBoards, getBoard, createBoard, removeBoard, updateBoard };