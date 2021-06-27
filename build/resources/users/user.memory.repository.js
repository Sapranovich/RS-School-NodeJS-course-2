"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.removeUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
// import { v4 as uuidv4 } from 'uuid';
const typeorm_1 = require("typeorm");
const user_model_1 = require("./user.model");
const task_model_1 = require("../tasks/task.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getAllUsers = async () => user_model_1.User.find();
exports.getAllUsers = getAllUsers;
const getUser = async (userId) => {
    const user = await user_model_1.User.findOne({ id: userId });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};
exports.getUser = getUser;
const createUser = async (body) => {
    body.password = await bcrypt_1.default.hash(body.password.toString(), 10);
    const user = new user_model_1.User(body);
    await user.save();
    return user;
};
exports.createUser = createUser;
const removeUser = async (userId) => {
    const task = await typeorm_1.getRepository(user_model_1.User).delete(userId);
    if (task) {
        await typeorm_1.getRepository(task_model_1.Task).update({ userId }, { userId: null });
        return true;
    }
    return false;
};
exports.removeUser = removeUser;
const updateUser = async (userId, body) => {
    const user = await user_model_1.User.findOne({ id: userId });
    if (!user) {
        throw new Error('User not found');
    }
    await user_model_1.User.update(userId, body);
    return user_model_1.User.findOne(userId);
};
exports.updateUser = updateUser;
