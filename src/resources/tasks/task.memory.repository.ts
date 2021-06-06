import { v4 as uuidv4 } from 'uuid';
import {Task ,ITask} from './task.model';

const tasks:ITask[] = [];

const getAllTasks = async (boardId:string) => tasks.filter((task) => task.boardId === boardId)
const getTask = async (boardId:string, taskId:string) => tasks.filter((task) => task.boardId === boardId && task.id === taskId)[0]

const createTask = async (boardId:string, body:ITask) => {
  const id:string  = uuidv4();
  const {title, order, description, columnId} = body;
  const newTask = new Task({ id, title, order, description, columnId, boardId });
  tasks.push(newTask);
  return tasks.filter((task) => task.id === id)[0];
}

const removeTask = async (taskId:string) => {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  return tasks.splice(taskIndex, 1);
}

const updateTask = async (taskId:string, body:ITask) => {
  const taskIndex =tasks.findIndex(task => task.id === taskId);
  tasks[taskIndex] = {
    id:taskId,
    ...body
  }
  return tasks[taskIndex]
}
export default tasks;
export {
    getAllTasks,
    getTask,
    createTask,
    removeTask,
    updateTask
}