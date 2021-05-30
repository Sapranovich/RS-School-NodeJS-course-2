import * as taskRepo from './task.memory.repository';
import {ITask} from './task.model';

/**
 * Get all tasks specific board.
 * @param {string} boardId - specific board id. 
 * @returns {Promise<Array>} Array of Task objects.
 */
const getAllTasks = (boardId:string) => taskRepo.getAllTasks(boardId);
/**
 * Get task by id.
 * @param {string} boardId - board id. 
 * @param {string} taskId - task id.
 * @returns {Promise<Object>} Task object.
 */
const getTask = (boardId:string, taskId:string) => taskRepo.getTask(boardId, taskId);
/**
 * Create task in specific board. 
 * @param {string} boardId - board id. 
 * @param {object} body - Task object
 * @returns {Promise<Object>} created Task object.
 */
const createTask = (boardId:string, body:ITask) => taskRepo.createTask(boardId, body);
/**
 * Remove task by id.
 * @param {string} taskId - task id. 
 * @returns {Promise<Object>} removed Task object.
 */
const removeTask = (taskId:string) => taskRepo.removeTask(taskId);
/**
 * Update task by id.
 * @param {string} taskId - task id.
 * @param {object} body - Task object.
 * @returns {Promise<Object>} updated Task object.
 */
const updateTask = (taskId:string, body: ITask) => taskRepo.updateTask(taskId, body);

export {
    getAllTasks,
    getTask,
    createTask,
    removeTask,
    updateTask
}