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
const user_model_1 = require("./user.model");
const http_status_codes_1 = require("http-status-codes");
const usersService = __importStar(require("./user.service"));
const errorHandler_1 = require("../../common/errorHandler");
exports.router = express_1.default.Router();
exports.router.route('/').get(errorHandler_1.catchErrors(async (_req, res) => {
    const users = await usersService.getAllUsers();
    if (users) {
        res.status(http_status_codes_1.StatusCodes.OK).json(users.map(user_model_1.User.toResponse));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:userId').get(errorHandler_1.catchErrors(async (req, res) => {
    const { userId } = req.params;
    const user = await usersService.getUser(userId);
    if (user) {
        res.status(http_status_codes_1.StatusCodes.OK).json(user_model_1.User.toResponse(user));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/').post(errorHandler_1.catchErrors(async (req, res) => {
    const user = await usersService.createUser(req.body);
    if (user) {
        res.status(http_status_codes_1.StatusCodes.CREATED).json(user_model_1.User.toResponse(user));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:userId').put(errorHandler_1.catchErrors(async (req, res) => {
    const { body, params: { userId } } = req;
    const user = await usersService.updateUser(userId, body);
    if (user) {
        res.status(http_status_codes_1.StatusCodes.OK).json(user_model_1.User.toResponse(user));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
exports.router.route('/:userId').delete(errorHandler_1.catchErrors(async (req, res) => {
    const { userId } = req.params;
    if (await usersService.removeUser(userId))
        res.status(204).json();
    if (await usersService.removeUser(userId)) {
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json();
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
    }
}));
