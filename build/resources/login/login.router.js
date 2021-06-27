"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorHandler_1 = require("../../common/errorHandler");
const login_service_1 = require("./login.service");
const config_1 = require("../../common/config");
exports.router = express_1.default.Router();
exports.router.route('/login').post(errorHandler_1.catchErrors(async (req, res) => {
    const user = req.body;
    const realUser = await login_service_1.authenticateUser(user);
    if (realUser) {
        const payload = { userId: realUser.id, login: realUser.login };
        const jwtToken = jsonwebtoken_1.default.sign(payload, String(config_1.SECRET_STRING));
        return res.status(http_status_codes_1.StatusCodes.OK).json({ token: jwtToken });
    }
    return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json(http_status_codes_1.ReasonPhrases.FORBIDDEN);
}));
