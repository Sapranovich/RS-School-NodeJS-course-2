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
const column_model_1 = require("../columns/column.model");
const errorHandler_1 = require("../../common/errorHandler");
// import {User,} from './user.model';
const boardService = __importStar(require("./board.service"));
exports.router = express_1.default.Router();
exports.router.route('/').get(errorHandler_1.catchErrors(async (_req, res) => {
    const boards = await boardService.getAllBoards();
    if (boards) {
        res.status(http_status_codes_1.StatusCodes.OK).json(boards);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:boardId').get(errorHandler_1.catchErrors(async (req, res) => {
    const { boardId } = req.params;
    const board = await boardService.getBoard(boardId);
    if (board) {
        res.status(http_status_codes_1.StatusCodes.OK).json(board);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/').post(errorHandler_1.catchErrors(async (req, res) => {
    const body = {
        ...req.body,
        columns: JSON.stringify([...req.body.columns.map((item) => new column_model_1.Column(item))])
    };
    const board = await boardService.createBoard(body);
    if (board) {
        res.status(http_status_codes_1.StatusCodes.CREATED).json(board);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:boardId').put(errorHandler_1.catchErrors(async (req, res) => {
    const { body, params: { boardId } } = req;
    const board = await boardService.updateBoard(boardId, body);
    if (board) {
        res.status(http_status_codes_1.StatusCodes.OK).json(board);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:boardId').delete(errorHandler_1.catchErrors(async (req, res) => {
    // const { boardId } = req.params;
    // await boardService.removeBoard(boardId!);
    // res.status(StatusCodes.NO_CONTENT).json();
    const { boardId } = req.params;
    // if (await boardService.removeBoard(boardId!)) res.status(204).json();
    if (await boardService.removeBoard(boardId)) {
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json();
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
