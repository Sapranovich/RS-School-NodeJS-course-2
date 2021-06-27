"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
// import bcrypt from 'bcrypt';
const user_model_1 = require("../users/user.model");
async function authenticateUser(user) {
    const { login, password } = user;
    console.log('asdasdsad', password);
    const foundUser = user_model_1.User.findOne({ login });
    // if (foundUser && await bcrypt.compare(String(password), String(foundUser.password))) {
    if (foundUser) {
        return foundUser;
    }
    return false;
}
exports.authenticateUser = authenticateUser;
