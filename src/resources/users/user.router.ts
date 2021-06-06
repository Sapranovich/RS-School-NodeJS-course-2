import express from 'express';
import { User, } from './user.model';
import * as usersService from './user.service';
import { catchErrors } from '../../common/errorHandler';
export const router = express.Router();

router.route('/').get(catchErrors(async (_req: express.Request, res: express.Response) => {
  const users = await usersService.getAllUsers();
  if (users) {
    res.json(users.map(User.toResponse));
  } else {
    const error: any = new Error();
    error.status = 404;
    throw error;
  }
}));

router.route('/:userId').get(catchErrors(async (req: express.Request, res: express.Response) => {
  const { userId } = req.params;
  const user = await usersService.getUser(userId!);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    const error: any = new Error();
    error.status = 404;
    throw error;
  }
}));

router.route('/').post(catchErrors(async (req: express.Request, res: express.Response) => {
  const user = await usersService.createUser(req.body);
  if (user) {
    res.status(201).json(User.toResponse(user));
  } else {
    const error: any = new Error();
    error.status = 404;
    throw error;
  }
}));

router.route('/:userId').put(catchErrors(async (req: express.Request, res: express.Response) => {
  const { body, params: { userId } } = req;
  const user = await usersService.updateUser(userId!, body);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    const error: any = new Error();
    error.status = 404;
    throw error;
  }
}));

router.route('/:userId').delete(catchErrors(async (req: express.Request, res: express.Response) => {
  const { userId } = req.params;
  if (await usersService.removeUser(userId!)) res.status(204).json();

  if (await usersService.removeUser(userId!)) {
    res.status(204).json()
  } else {
    const error: any = new Error();
    error.status = 404;
    throw error;
  }
}));
