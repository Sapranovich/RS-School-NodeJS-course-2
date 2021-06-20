"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.removeTask = exports.createTask = exports.getTask = exports.getAllTasks = void 0;
const task_model_1 = require("./task.model");
const getAllTasks = async (boardId) => await task_model_1.Task.find({ boardId: boardId });
exports.getAllTasks = getAllTasks;
const getTask = async (boardId, taskId) => task_model_1.Task.findOne({ id: taskId, boardId: boardId });
exports.getTask = getTask;
const createTask = async (boardId, body) => {
    const task = new task_model_1.Task({ ...body, boardId: boardId });
    await task.save();
    return task;
};
exports.createTask = createTask;
const removeTask = async (taskId) => {
    const timber = await task_model_1.Task.findOne({ id: taskId });
    if (timber) {
        await task_model_1.Task.remove(timber);
        return true;
    }
    return false;
};
exports.removeTask = removeTask;
const updateTask = async (taskId, body) => {
    const task = await task_model_1.Task.findOne({ id: taskId });
    if (!task) {
        throw new Error('User not found');
    }
    console.log('adasdasdasdasdas', body);
    await task_model_1.Task.update(taskId, body);
    return task_model_1.Task.findOne(taskId);
    // const user = await User.findOne({id: userId});
    // if (!user) {
    //     throw new Error('User not found');
    // }
    // await User.update(userId, body);
    // return User.findOne(userId);
};
exports.updateTask = updateTask;
