"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
/**
 * Task class.
 */
class Task {
    /**
 * Task constructor.
 * @param {string} id - instance id.
 * @param {string} title - task name.
 * @param {string} order -  task order.
 * @param {string} description - task description.
 * @param {string} userId - user id created this task.
 * @param {string} boardId - board id where the task is located.
 * @param {string} columnId - column id.
 */
    constructor({ id = uuid_1.v4(), title = 'Task', order = 0, description = 'Description', userId = null, boardId = 'boardId', columnId = 'columnId' } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
exports.Task = Task;
