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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const path_1 = __importDefault(require("path"));
const yamljs_1 = __importDefault(require("yamljs"));
const userRouter = __importStar(require("./resources/users/user.router"));
const taskRouter = __importStar(require("./resources/tasks/task.router"));
const boardRouter = __importStar(require("./resources/boards/board.router"));
const loginRouter = __importStar(require("./resources/login/login.router"));
const errorHandler_1 = require("./common/errorHandler");
const logger_1 = require("./common/logger");
const checkToken_1 = require("./middleware/checkToken");
const app = express_1.default();
exports.app = app;
const swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, '../doc/api.yaml'));
app.use(express_1.default.json());
app.use('/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
// catch errors: uncaughtException
process.on('uncaughtException', err => {
    logger_1.logger.error(`uncaughtException: ${err.message}`);
});
// catch errors: unhandledRejection
process.on('unhandledRejection', (err) => {
    let errorMessage = 'unhandledRejection - ';
    if (err) {
        errorMessage += err.toString();
    }
    logger_1.logger.error(errorMessage);
});
app.use(logger_1.logInfo);
app.use(checkToken_1.checkToken);
app.use('/users', userRouter.router);
app.use('/boards', [boardRouter.router, taskRouter.router]);
app.use('/login', loginRouter.router);
app.use(errorHandler_1.errorHandler);
