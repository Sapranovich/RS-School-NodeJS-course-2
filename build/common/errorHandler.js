"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrors = exports.errorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const logger_1 = require("./logger");
const errorHandler = (err, _req, res, next) => {
    if (err) {
        const status = err.status ? err.status : http_status_codes_1.INTERNAL_SERVER_ERROR;
        logger_1.logger.error(JSON.stringify({ status, message: http_status_codes_1.getStatusText(status) }));
        res.status(status).json({ message: http_status_codes_1.getStatusText(status) });
    }
    next();
};
exports.errorHandler = errorHandler;
const catchErrors = (fn) => async (req, res, next) => {
    try {
        const resault = await fn(req, res, next);
        return resault;
    }
    catch (e) {
        return e;
    }
};
exports.catchErrors = catchErrors;
