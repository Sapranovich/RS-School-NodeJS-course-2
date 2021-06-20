import { getRepository } from 'typeorm';
import { Board, IBoard } from './board.model';
import { Task } from '../tasks/task.model';

function boardInFormat(board: IBoard) {
  const resault = {
    ...board,
    columns: JSON.parse(board.columns)
  }
  return resault;
}

const getAllBoards = async () => (await Board.find()).map(board => boardInFormat(board));

const getBoard = async (boardId: string) => {
  const board = await Board.findOne({ id: boardId });
  if (!board) {
    return false;
  }
  return boardInFormat(board);
}

const createBoard = async (body: IBoard) => {
  const board = new Board(body);
  await board.save();
  return boardInFormat(board);
}

const removeBoard = async (boardId: string) => {
  const task = await getRepository(Board).delete(boardId);
  if (task) {
    await getRepository(Task).delete({boardId});
    return true;
  }
  return false;
}

const updateBoard = async (boardId: string, body: IBoard) => {
  const board = await Board.findOne(boardId);
  if (!board) {
    throw new Error('User not found');
  }
  const updateBody = {
    ...body,
    columns: JSON.stringify(body.columns)
  }
  await Board.update(boardId, updateBody);

  return Board.findOne(boardId);
}

export { getAllBoards, getBoard, createBoard, removeBoard, updateBoard };