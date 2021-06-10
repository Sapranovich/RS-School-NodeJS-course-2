"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.removeUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const uuid_1 = require("uuid");
const user_model_1 = require("./user.model");
// const BD = require('../../common/db');
const users = [];
const getAllUsers = async () => users.filter((entity) => entity);
exports.getAllUsers = getAllUsers;
const getUser = async (userId) => users.filter((user) => user.id === userId)[0];
exports.getUser = getUser;
// if (!user) {
//   throw new Error(`User with id ${userId} was not found`);
// }
// return user;
const createUser = async (body) => {
    const id = uuid_1.v4();
    const newUser = new user_model_1.User({ id, ...body });
    users.push(newUser);
    return users.filter((user) => user.id === id)[0];
};
exports.createUser = createUser;
const removeUser = async (userId) => {
    const userIndex = users.findIndex((user) => user.id === userId);
    // db.Tasks.forEach((task, index) => {
    //   if(task.userId === userId){
    //     db.Tasks[index] = { ...task, userId: null }
    //   }
    // });
    return users.splice(userIndex, 1);
};
exports.removeUser = removeUser;
const updateUser = async (userId, body) => {
    const userIndex = users.findIndex((user) => user.id === userId);
    users[userIndex] = { id: userId, ...body };
    return users[userIndex];
};
exports.updateUser = updateUser;
exports.default = users;
