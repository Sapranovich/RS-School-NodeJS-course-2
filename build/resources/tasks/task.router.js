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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const errorHandler_1 = require("../../common/errorHandler");
const taskService = __importStar(require("./task.service"));
exports.router = express_1.default.Router();
exports.router.route('/:boardId/tasks').get(errorHandler_1.catchErrors(async (req, res) => {
    const { boardId } = req.params;
    const tasks = await taskService.getAllTasks(boardId);
    if (tasks.length) {
        res.status(http_status_codes_1.StatusCodes.OK).json(tasks);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:boardId/tasks/:taskId').get(errorHandler_1.catchErrors(async (req, res) => {
    console.log('/:boardId/tasks/:taskId', req.params);
    const { boardId, taskId } = req.params;
    const task = await taskService.getTask(boardId, taskId);
    if (task) {
        res.status(200).json(task);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:boardId/tasks').post(errorHandler_1.catchErrors(async (req, res) => {
    const { body, params: { boardId } } = req;
    const task = await taskService.createTask(boardId, body);
    if (task) {
        res.status(http_status_codes_1.StatusCodes.CREATED).json(task);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:boardId/tasks/:taskId').put(errorHandler_1.catchErrors(async (req, res) => {
    const { body, params: { taskId } } = req;
    const task = await taskService.updateTask(taskId, body);
    if (task) {
        res.status(http_status_codes_1.StatusCodes.OK).json(task);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:boardId/tasks/:taskId').delete(errorHandler_1.catchErrors(async (req, res) => {
    const { taskId } = req.params;
    if (await taskService.removeTask(taskId)) {
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json();
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
