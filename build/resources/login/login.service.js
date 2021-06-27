"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../users/user.model");
async function authUser(user) {
    const { login, password } = user;
    const targetUser = await user_model_1.User.findOne({ login });
    if (targetUser && await bcrypt_1.default.compare(String(password), String(targetUser?.password))) {
        return targetUser;
    }
    return false;
}
exports.authUser = authUser;
