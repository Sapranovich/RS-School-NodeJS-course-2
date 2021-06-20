"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const user_model_1 = require("./resources/users/user.model");
const task_model_1 = require("./resources/tasks/task.model");
const board_model_1 = require("./resources/boards/board.model");
exports.config = {
    "type": 'postgres',
    "synchronize": true,
    "host": 'host.docker.internal',
    "port": 5432,
    "username": "postgres",
    "password": "example",
    "database": "db_example",
    "autoReconnect": true,
    "reconnectTries": Number.MAX_VALUE,
    "entities": [user_model_1.User, task_model_1.Task, board_model_1.Board],
    "reconnectionInterval": 1000
};
