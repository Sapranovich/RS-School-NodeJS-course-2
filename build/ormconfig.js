"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const user_model_1 = require("./resources/users/user.model");
const task_model_1 = require("./resources/tasks/task.model");
const board_model_1 = require("./resources/boards/board.model");
const config_1 = require("./common/config");
exports.config = {
    "type": 'postgres',
    "synchronize": true,
    "host": config_1.POSTGRES_HOST,
    "port": config_1.DB_PORT,
    "username": config_1.POSTGRES_USER,
    "password": config_1.POSTGRES_PASSWORD,
    "database": config_1.POSTGRES_DB,
    "autoReconnect": true,
    "reconnectTries": Number.MAX_VALUE,
    "entities": [user_model_1.User, task_model_1.Task, board_model_1.Board],
    "reconnectionInterval": 1000
};
