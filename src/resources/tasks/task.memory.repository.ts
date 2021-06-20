import {Task , ITask} from './task.model';


const getAllTasks = async (boardId:string) => await Task.find({ boardId: boardId});

const getTask = async (boardId:string, taskId:string) => Task.findOne({id: taskId, boardId :boardId});

const createTask = async (boardId:string, body: ITask) => {
  const task = new Task({ ...body, boardId: boardId});
  await task.save();
  return body;
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
    await Task.update({id: taskId}, body);
    return Task.findOne({id: taskId});
}

// const tasks = [];
// export default tasks;
export {
    getAllTasks,
    getTask,
    createTask,
    removeTask,
    updateTask
}