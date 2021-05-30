
import { v4 as uuidv4 } from 'uuid';
import tasks from '../tasks/task.memory.repository';
import {Board ,IBoard} from './board.model';
import { ITask } from '../tasks/task.model';

const boards:IBoard[] = [];

const getAllBoards = async () => boards.filter((entity) => entity);

const getBoard = async (boardId:string) => boards.filter((board) => board.id === boardId)[0]

const createBoard = async (body:IBoard) => {
  const boardId:string = uuidv4();
  // const newBoard:IBoard = {
  //   id: boardId,
  //   ...body,
  //   columns: body.columns.map((column, index ) => ({
  //       id: uuidv4(),
  //       ...body.columns[index]
  //     }))  
    
  // }
  boards.push(new Board({...body}));
  return boards.filter(board => board.id === boardId)[0];
}

const removeBoard = async (boardId:string) => {
  const boardIndex = boards.findIndex(board => board.id === boardId);
  // const updateTasks = tasks.filter(task => task.boardId !== boardId);
  // tasks = updateTasks;
  tasks.forEach((task:ITask, index:number) => {
    if(task.boardId === boardId){
      console.log('tasks[index]', tasks[index])
      // tasks[index].boardId = undefined
    }
  });
  return boards.splice(boardIndex, 1);
}

const updateBoard = async (boardId:string, body:IBoard) => {
  const boardIndex = boards.findIndex(board => board.id === boardId);
  boards[boardIndex] = {id:boardId, ...body};
  return boards[boardIndex];
}

export { getAllBoards, getBoard, createBoard, removeBoard, updateBoard };