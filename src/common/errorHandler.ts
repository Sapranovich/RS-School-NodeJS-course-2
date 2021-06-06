import { INTERNAL_SERVER_ERROR, getStatusText } from 'http-status-codes'
import { logger } from './logger';

const errorHandler = async (err:any, _req:any, res:any, next:any) => {
  if (err) {
    const status = err.status ? err.status : INTERNAL_SERVER_ERROR;
    logger.error(JSON.stringify({ status, message: getStatusText(status) }));
    await res.status(status).json({ message: getStatusText(status) });
  }
  next();
};

const catchErrors = (fn:Function) => async (req:any, res:any, next:any) => {
  try {
    const resault = await fn(req, res, next);
    return resault
  } catch (e) {
    return next(e);
  }
};

export{ errorHandler, catchErrors };