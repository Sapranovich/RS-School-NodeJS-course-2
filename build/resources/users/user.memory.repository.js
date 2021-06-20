"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.removeUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
// import { v4 as uuidv4 } from 'uuid';
const user_model_1 = require("./user.model");
const getAllUsers = async () => user_model_1.User.find();
exports.getAllUsers = getAllUsers;
const getUser = async (userId) => {
    const user = await user_model_1.User.findOne(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};
exports.getUser = getUser;
const createUser = async (body) => {
    const user = await new user_model_1.User(body);
    await user.save();
    return user;
};
exports.createUser = createUser;
const removeUser = async (userId) => {
    console.log(userId);
    return true;
    // const tasks = await tasksRepo.getAll();
    // if (tasks.length) {
    //     tasks.forEach(async (task: Task) => {
    //         if (task.userId === id) {
    //             await tasksRepo.update(task.id, { ...task, userId: null });
    //         }
    //     });
    // }
};
exports.removeUser = removeUser;
const updateUser = async (userId, body) => {
    const user = await user_model_1.User.findOne(userId);
    if (!user) {
        throw new Error('User not found');
    }
    await user_model_1.User.update(userId, body);
    return user_model_1.User.findOne(userId);
};
exports.updateUser = updateUser;
