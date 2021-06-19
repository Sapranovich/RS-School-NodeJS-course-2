import { ErrorRequestHandler } from 'express';
import { INTERNAL_SERVER_ERROR, getStatusText } from 'http-status-codes';
import { logger } from './logger';

const errorHandler: ErrorRequestHandler =  (err, _req, res, next) => {
  if (err) {
    const status = err.status ? err.status : INTERNAL_SERVER_ERROR;
    logger.error(JSON.stringify({ status, message: getStatusText(status) }));
    res.status(status).json({ message: getStatusText(status) });
  }
  next();
};

const catchErrors = (fn:Function): ErrorRequestHandler => async (req, res, next) => {
  try {
    const resault = await fn(req, res, next);
    return resault;
  } catch (e) {
    return e;
  }
};

export{ errorHandler, catchErrors };