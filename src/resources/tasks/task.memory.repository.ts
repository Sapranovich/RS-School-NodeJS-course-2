import {Task , ITask} from './task.model';


const getAllTasks = async (boardId:string) => Task.find({ boardId});

const getTask = async (boardId: string, taskId:string) => Task.findOne({id: taskId, boardId});
 
const createTask = async (boardId:string, body: ITask) => {
  const task = new Task({ ...body, boardId});
  await task.save();
  return task;
}

const removeTask = async (taskId:string) => {
  const timber = await Task.findOne({id: taskId});
  if(timber){
    await Task.remove(timber);
    return true;
  }
  return false;
}

const updateTask = async (taskId:string, body: ITask) => {
  const task = await Task.findOne({id:taskId});
    if (!task) {
        throw new Error('User not found');
    }
    await Task.update(taskId, body);
    return Task.findOne(taskId);
}

export {
    getAllTasks,
    getTask,
    createTask,
    removeTask,
    updateTask
}