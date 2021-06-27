"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../common/config");
function checkToken(req, res, next) {
    if (['/', '/login', '/doc'].includes(req.url))
        return next();
    const authHeader = req.headers.authorization;
    if (authHeader !== undefined) {
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer' || !token) {
            return res.status(401).send('Unauthorized');
        }
        jsonwebtoken_1.default.verify(token, String(config_1.SECRET_STRING));
        return next();
    }
    return res.status(401).send('Unauthorized');
}
exports.checkToken = checkToken;
