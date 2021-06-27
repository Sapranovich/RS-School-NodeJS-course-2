import express from 'express';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(format.cli()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'error.log',
      level: 'error',
      format: format.combine(format.colorize(), format.cli(), format.json())
    }),
    new transports.File({
      filename: 'info.log',
      level: 'info',
      format: format.combine(format.colorize(), format.cli(), format.json())
    })
  ]
});

const logInfo = (req: express.Request, _res: express.Response, next:express.NextFunction) => {
  logger.info(JSON.stringify({
    url: req.url,
    params: req.params,
    body: req.body
  }));
  next();
};

export { logger, logInfo };