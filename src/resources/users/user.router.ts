import express from 'express';
import { User, } from './user.model';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import * as usersService from './user.service';
import { catchErrors } from '../../common/errorHandler';

export const router = express.Router();

router.route('/').get(catchErrors(async (_req: express.Request, res: express.Response) => {
  const users = await usersService.getAllUsers();
  if (users) {
    res.status(StatusCodes.OK).json(users.map(User.toResponse));
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}));

router.route('/:userId').get(catchErrors(async (req: express.Request, res: express.Response) => {
  const { userId } = req.params;
  const user = await usersService.getUser(userId!);
  if (user) {
    res.status(StatusCodes.OK).json(User.toResponse(user));
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}));

router.route('/').post(catchErrors(async (req: express.Request, res: express.Response) => {
  const user = await usersService.createUser(req.body);
  if (user) {
    res.status(StatusCodes.CREATED).json(User.toResponse(user));
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}));

router.route('/:userId').put(catchErrors(async (req: express.Request, res: express.Response) => {
  const { body, params: { userId } } = req;
  const user = await usersService.updateUser(userId!, body);
  if (user) {
    res.status(StatusCodes.OK).json(User.toResponse(user));
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}));

router.route('/:userId').delete(catchErrors(async (req: express.Request, res: express.Response) => {
  const { userId } = req.params;
  if (await usersService.removeUser(userId!)) res.status(204).json();

  if (await usersService.removeUser(userId!)) {
    res.status(StatusCodes.NO_CONTENT).json()
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}));
