import express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { Column, IColumn } from "../columns/column.model";
import { catchErrors } from '../../common/errorHandler';
import * as boardService from './board.service';

export const router = express.Router();

router.route('/').get(catchErrors(async (_req: express.Request, res: express.Response) => {
  const boards = await boardService.getAllBoards();
  if (boards) {
    res.status(StatusCodes.OK).json(boards);
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}))

router.route('/:boardId').get(catchErrors(async (req: express.Request, res: express.Response) => {
  const { boardId } = req.params;
  const board = await boardService.getBoard(boardId!);

  if (board) {
    res.status(StatusCodes.OK).json(board);
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}))

router.route('/').post(catchErrors(async (req: express.Request, res: express.Response) => {
  const body = {
    ...req.body,
    columns: JSON.stringify([...req.body.columns.map((item: IColumn) => new Column(item))])
  }
  const board = await boardService.createBoard(body);
  if (board) {
    res.status(StatusCodes.CREATED).json(board)
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}))

router.route('/:boardId').put(catchErrors(async (req: express.Request, res: express.Response) => {
  const { body, params: { boardId } } = req;
  const board = await boardService.updateBoard(boardId!, body);

  if (board) {
    res.status(StatusCodes.OK).json(board);
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}))

router.route('/:boardId').delete(catchErrors(async (req: express.Request, res: express.Response) => {
  const { boardId } = req.params;

  if (await boardService.removeBoard(boardId!)) {
    res.status(StatusCodes.NO_CONTENT).json()
  } else {
    res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  }
}))
