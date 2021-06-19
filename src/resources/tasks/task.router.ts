
import express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { catchErrors } from '../../common/errorHandler';
// import {User,} from './user.model';
import * as taskService from './task.service';

export const router = express.Router();


router.route('/:boardId/tasks').get(catchErrors(async (req:express.Request, res: express.Response) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllTasks(boardId!);
  if (tasks) {
    res.status(StatusCodes.OK).json(tasks);
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}));

router.route('/:boardId/tasks/:taskId').get(catchErrors(async (req:express.Request, res: express.Response) => {
  console.log('/:boardId/tasks/:taskId', req.params)
    const { boardId, taskId } = req.params;
    const task = await taskService.getTask(boardId!, taskId!);
    if (task) {
      res.status(StatusCodes.OK).json(task);
    } else {
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    }
}))

router.route('/:boardId/tasks').post(catchErrors(async (req:express.Request, res: express.Response) => {
  const { body, params:{ boardId } } = req;
  const task = await taskService.createTask(boardId!, body);
  if (task) {
    res.status(StatusCodes.CREATED).json(task);
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }

}))

router.route('/:boardId/tasks/:taskId').put(catchErrors(async (req:express.Request, res: express.Response) => {
  const { body, params:{ taskId } } = req;
  const task = await taskService.updateTask(taskId!, body);
  if (task) {
    res.status(StatusCodes.OK).json(task);
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
  
}))

router.route('/:boardId/tasks/:taskId').delete(catchErrors(async (req:express.Request, res: express.Response) => {
  const { taskId } = req.params;
  if (await taskService.removeTask(taskId!)) {
    res.status(StatusCodes.NO_CONTENT).json();
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}))