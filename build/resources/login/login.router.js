"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorHandler_1 = require("../../common/errorHandler");
const login_service_1 = require("./login.service");
const config_1 = require("../../common/config");
exports.router = express_1.default.Router();
exports.router.route('/').post(errorHandler_1.catchErrors(async (req, res) => {
    const user = req.body;
    const targetUser = await login_service_1.authUser(user);
    if (targetUser) {
        const payload = { userId: targetUser.id, login: targetUser.login };
        const token = jsonwebtoken_1.default.sign(payload, String(config_1.SECRET_STRING));
        return res.status(200).json({ token });
    }
    return res.status(403).json('Forbidden');
}));
