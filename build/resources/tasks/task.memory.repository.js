"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.removeTask = exports.createTask = exports.getTask = exports.getAllTasks = void 0;
const uuid_1 = require("uuid");
const task_model_1 = require("./task.model");
const tasks = [];
const getAllTasks = async (boardId) => tasks.filter((task) => task.boardId === boardId);
exports.getAllTasks = getAllTasks;
const getTask = async (boardId, taskId) => tasks.filter((task) => task.boardId === boardId && task.id === taskId)[0];
exports.getTask = getTask;
const createTask = async (boardId, body) => {
    const id = uuid_1.v4();
    const { title, order, description, columnId } = body;
    const newTask = new task_model_1.Task({ id, title, order, description, columnId, boardId });
    tasks.push(newTask);
    return tasks.filter((task) => task.id === id)[0];
};
exports.createTask = createTask;
const removeTask = async (taskId) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    return tasks.splice(taskIndex, 1);
};
exports.removeTask = removeTask;
const updateTask = async (taskId, body) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex] = {
        id: taskId,
        ...body
    };
    return tasks[taskIndex];
};
exports.updateTask = updateTask;
exports.default = tasks;
