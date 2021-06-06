import { createLogger, format, transports } from 'winston';

class ReqInfo {
  url: string
  params: any
  body: any
  constructor(url: string, params: any, body: any) {
    this.url = url;
    this.params = params;
    this.body = body;
  }
}

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'info.log' }),
    new transports.Console()
  ]
});

const logInfo = (req: any) => {
  logger.info(JSON.stringify(new ReqInfo(req.url, req.params, req.body)));
};

export { logger, logInfo }