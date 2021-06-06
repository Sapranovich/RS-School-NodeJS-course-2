import express from 'express';
import { catchErrors } from '../../common/errorHandler';
// import {User,} from './user.model';
import * as boardService from './board.service';

export const router = express.Router();

router.route('/').get(catchErrors(async (_req: express.Request, res: express.Response) => {
  const boards = await boardService.getAllBoards();
  res.status(200).json(boards);
}))

router.route('/:boardId').get(catchErrors(async (req: express.Request, res: express.Response) => {
    const {boardId} = req.params;
    const board = await boardService.getBoard(boardId!);
    if(board) {
      res.status(200).json(board);
    } else {
      res.status(404).json('Not Found');
    }
}))

router.route('/').post(catchErrors(async (req: express.Request, res: express.Response) => {
  const board = await boardService.createBoard(req.body);
  res.status(201).json(board)
}))

router.route('/:boardId').put(catchErrors(async (req: express.Request, res: express.Response) => {
  const { body, params:{ boardId } } = req;
  const board = await boardService.updateBoard(boardId!, body);
  res.status(200).json(board);
}))

router.route('/:boardId').delete(catchErrors(async (req: express.Request, res: express.Response) => {
  const {boardId} = req.params;
  if(await boardService.removeBoard(boardId!)) res.status(204).json();
}))
