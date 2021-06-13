import { createLogger, format, transports } from 'winston';

class ReqInfo {
  url: any

  params:any

  body:any

  constructor(url:any, params:any, body:any) {
    this.url = url;
    this.params = params;
    this.body = body;
  }
}

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

const logInfo = (req:any, _res:any, next:any) => {
  logger.info(JSON.stringify(new ReqInfo(req.url, req.params, req.body)));
  next();
};

export { logger, logInfo };