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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTGRES_DB = exports.POSTGRES_USER = exports.NODE_WEB_APP_IMAGE = exports.POSTGRES_IMAGE = exports.POSTGRES_PASSWORD = exports.DB_PORT = exports.AUTH_MODE = exports.JWT_SECRET_KEY = exports.MONGO_CONNECTION_STRING = exports.NODE_ENV = exports.PORT = exports.POSTGRES_HOST = exports.SECRET_STRING = void 0;
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
dotenv.config({
    path: path.join(__dirname, '../../.env')
});
_a = process.env, exports.SECRET_STRING = _a.SECRET_STRING, exports.POSTGRES_HOST = _a.POSTGRES_HOST, exports.PORT = _a.PORT, exports.NODE_ENV = _a.NODE_ENV, exports.MONGO_CONNECTION_STRING = _a.MONGO_CONNECTION_STRING, exports.JWT_SECRET_KEY = _a.JWT_SECRET_KEY, exports.AUTH_MODE = _a.AUTH_MODE, exports.DB_PORT = _a.DB_PORT, exports.POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, exports.POSTGRES_IMAGE = _a.POSTGRES_IMAGE, exports.NODE_WEB_APP_IMAGE = _a.NODE_WEB_APP_IMAGE, exports.POSTGRES_USER = _a.POSTGRES_USER, exports.POSTGRES_DB = _a.POSTGRES_DB;
