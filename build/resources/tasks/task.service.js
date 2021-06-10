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
exports.updateTask = exports.removeTask = exports.createTask = exports.getTask = exports.getAllTasks = void 0;
const taskRepo = __importStar(require("./task.memory.repository"));
/**
 * Get all tasks specific board.
 * @param {string} boardId - specific board id.
 * @returns {Promise<Array>} Array of Task objects.
 */
const getAllTasks = (boardId) => taskRepo.getAllTasks(boardId);
exports.getAllTasks = getAllTasks;
/**
 * Get task by id.
 * @param {string} boardId - board id.
 * @param {string} taskId - task id.
 * @returns {Promise<Object>} Task object.
 */
const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);
exports.getTask = getTask;
/**
 * Create task in specific board.
 * @param {string} boardId - board id.
 * @param {object} body - Task object
 * @returns {Promise<Object>} created Task object.
 */
const createTask = (boardId, body) => taskRepo.createTask(boardId, body);
exports.createTask = createTask;
/**
 * Remove task by id.
 * @param {string} taskId - task id.
 * @returns {Promise<Object>} removed Task object.
 */
const removeTask = (taskId) => taskRepo.removeTask(taskId);
exports.removeTask = removeTask;
/**
 * Update task by id.
 * @param {string} taskId - task id.
 * @param {object} body - Task object.
 * @returns {Promise<Object>} updated Task object.
 */
const updateTask = (taskId, body) => taskRepo.updateTask(taskId, body);
exports.updateTask = updateTask;
