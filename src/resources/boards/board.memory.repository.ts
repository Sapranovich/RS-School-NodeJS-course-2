

import { Board, IBoard } from './board.model';
import { Task } from '../tasks/task.model';


function boardInFormat(board: any) {
  const resault = {
    ...board,
    columns: JSON.parse(board.columns)
  }
  return resault;
}



const getAllBoards = async () => {
  return  (await Board.find()).map(board => boardInFormat(board))
};

const getBoard = async (boardId: string) => {
  const board = await Board.findOne({ id: boardId });
  return boardInFormat(board);
}

const createBoard = async (body: IBoard) => {
  const board = new Board(body);
  await board.save();
  return boardInFormat(board);
}

const removeBoard = async (boardId: string) => {

  const timber = await Board.findOne({ id: boardId });
  if (timber) {
    await timber.remove();
    const updateTasks = await Task.find({ boardId: boardId });
    updateTasks.forEach(task => {
      task.boardId = null;
      task.save();
    })
    return true;
  }
  return false;
}

const updateBoard = async (boardId: string, body: IBoard) => {
  const board = await Board.findOne({ id: boardId });
  if (!board) {
    throw new Error('User not found');
  }

  const updateBody = {
    ...body,
    columns: JSON.stringify(body.columns)
  }
  await Board.update(boardId, updateBody);

  return Board.findOne({ id: boardId });
}

export { getAllBoards, getBoard, createBoard, removeBoard, updateBoard };