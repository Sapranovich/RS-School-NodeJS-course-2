// const usersRepo = require('./user.memory.repository');
import * as usersRepo from './user.memory.repository';
import {IUser} from './user.model';
/**
 * Return all users.
 * @returns {Promise<Array>} Array of user objects.
 */
const getAllUsers = () => usersRepo.getAllUsers();

/**
 * Get user by id.
 * @param {string} userId - user id. 
 * @returns {Promise<Array>} - User object.
 */
const getUser = (userId:string) => usersRepo.getUser(userId);

/**
 * Create user.
 * @param {object} body - User object.
 * @returns {Promise<Object>} - User object.
 */
const createUser = (body:IUser) => usersRepo.createUser(body);

/**
 * Remove user by id.
 * @param {string} userId - User id. 
 * @returns {Promise<Object>} - removed User object.
 */
const removeUser = (userId:string) => usersRepo.removeUser(userId);
/**
 * Update user by id.
 * @param {string} userId - User id. 
 * @param {object} body - User object.
 * @returns {Promise<Object>} - updated User object.
 */
const updateUser = (userId:string, body:IUser) => usersRepo.updateUser(userId, body);

export { getAllUsers, getUser, createUser, removeUser, updateUser };
