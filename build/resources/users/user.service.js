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
exports.updateUser = exports.removeUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
// const usersRepo = require('./user.memory.repository');
const usersRepo = __importStar(require("./user.memory.repository"));
/**
 * Return all users.
 * @returns {Promise<Array>} Array of user objects.
 */
const getAllUsers = () => usersRepo.getAllUsers();
exports.getAllUsers = getAllUsers;
/**
 * Get user by id.
 * @param {string} userId - user id.
 * @returns {Promise<Array>} - User object.
 */
const getUser = (userId) => usersRepo.getUser(userId);
exports.getUser = getUser;
/**
 * Create user.
 * @param {object} body - User object.
 * @returns {Promise<Object>} - User object.
 */
const createUser = (body) => usersRepo.createUser(body);
exports.createUser = createUser;
/**
 * Remove user by id.
 * @param {string} userId - User id.
 * @returns {Promise<Object>} - removed User object.
 */
const removeUser = (userId) => usersRepo.removeUser(userId);
exports.removeUser = removeUser;
/**
 * Update user by id.
 * @param {string} userId - User id.
 * @param {object} body - User object.
 * @returns {Promise<Object>} - updated User object.
 */
const updateUser = (userId, body) => usersRepo.updateUser(userId, body);
exports.updateUser = updateUser;
