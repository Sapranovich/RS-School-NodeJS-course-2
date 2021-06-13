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
const errorHandler_1 = require("../../common/errorHandler");
// import {User,} from './user.model';
const boardService = __importStar(require("./board.service"));
exports.router = express_1.default.Router();
exports.router.route('/').get(errorHandler_1.catchErrors(async (_req, res) => {
    const boards = await boardService.getAllBoards();
    if (boards) {
        res.status(200).json(boards);
    }
    else {
        const error = new Error();
        error.status = 404;
        throw error;
    }
}));
exports.router.route('/:boardId').get(errorHandler_1.catchErrors(async (req, res) => {
    const { boardId } = req.params;
    const board = await boardService.getBoard(boardId);
    if (board) {
        res.status(200).json(board);
    }
    else {
        const error = new Error();
        error.status = 404;
        throw error;
    }
}));
exports.router.route('/').post(errorHandler_1.catchErrors(async (req, res) => {
    const board = await boardService.createBoard(req.body);
    if (board) {
        res.status(201).json(board);
    }
    else {
        const error = new Error();
        error.status = 404;
        throw error;
    }
}));
exports.router.route('/:boardId').put(errorHandler_1.catchErrors(async (req, res) => {
    const { body, params: { boardId } } = req;
    const board = await boardService.updateBoard(boardId, body);
    if (board) {
        res.status(200).json(board);
    }
    else {
        const error = new Error();
        error.status = 404;
        throw error;
    }
}));
exports.router.route('/:boardId').delete(errorHandler_1.catchErrors(async (req, res) => {
    const { boardId } = req.params;
    if (await boardService.removeBoard(boardId)) {
        res.status(204).json();
    }
    else {
        const error = new Error();
        error.status = 404;
        throw error;
    }
}));
