

import {Board ,IBoard} from './board.model';
import { Task } from '../tasks/task.model';

const getAllBoards = async () => Board.find();

const getBoard = async (boardId:string) => Board.findOne({id: boardId})

const createBoard = async (body:IBoard) => {
  const board = new Board(body);
  await board.save();
  return board;
}

const removeBoard = async (boardId:string) => {
  
  const timber = await Board.findOne({id: boardId});
  if(timber){
    await timber.remove();
    const updateTasks = await Task.find({boardId: boardId});
    updateTasks.forEach(task=>{
      task.boardId = null;
      task.save();
    })
    return true;
  }
  return false;
}

const updateBoard = async (boardId:string, body:IBoard) => {
  const board = await Board.findOne({id: boardId});
    if (!board) {
        throw new Error('User not found');
    }
    await Board.update(boardId, body);
    return Board.findOne(boardId);
}

export { getAllBoards, getBoard, createBoard, removeBoard, updateBoard };