import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import * as userRouter from './resources/users/user.router';
import * as taskRouter from './resources/tasks/task.router';
import * as boardRouter from './resources/boards/board.router';

import { errorHandler } from './common/errorHandler';
import {logger, logInfo} from './common/logger';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});


// catch errors: uncaughtException
process.on('uncaughtException', error => {
  logger.log('error', `uncaughtException: ${error.message}`);
  setTimeout(() => {
    throw new Error(error.message);
  }, 1000);
});

// catch errors: unhandledRejection
process.on('unhandledRejection', (reason: any) => {
  logger.log('error', `unhandledRejection: ${reason.message}`);
  setTimeout(() => {
    throw new Error(reason.message);
  }, 1000);
});


app.use('/users', userRouter.router);
app.use('/boards', [boardRouter.router, taskRouter.router]);
app.use(errorHandler);
app.use(logInfo);

export { app };
