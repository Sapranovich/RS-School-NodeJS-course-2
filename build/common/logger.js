"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInfo = exports.logger = void 0;
const winston_1 = require("winston");
class ReqInfo {
    constructor(url, params, body) {
        this.url = url;
        this.params = params;
        this.body = body;
    }
}
const logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.cli()),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({
            filename: 'error.log',
            level: 'error',
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.cli(), winston_1.format.json())
        }),
        new winston_1.transports.File({
            filename: 'info.log',
            level: 'info',
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.cli(), winston_1.format.json())
        })
    ]
});
exports.logger = logger;
const logInfo = (req, _res, next) => {
    logger.info(JSON.stringify(new ReqInfo(req.url, req.params, req.body)));
    next();
};
exports.logInfo = logInfo;
