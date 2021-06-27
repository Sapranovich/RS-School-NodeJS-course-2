"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.removeTask = exports.createTask = exports.getTask = exports.getAllTasks = void 0;
const task_model_1 = require("./task.model");
const getAllTasks = async (boardId) => task_model_1.Task.find({ boardId });
exports.getAllTasks = getAllTasks;
const getTask = async (boardId, taskId) => task_model_1.Task.findOne({ id: taskId, boardId });
exports.getTask = getTask;
const createTask = async (boardId, body) => {
    const task = new task_model_1.Task({ ...body, boardId });
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
    await task_model_1.Task.update(taskId, body);
    return task_model_1.Task.findOne(taskId);
};
exports.updateTask = updateTask;
