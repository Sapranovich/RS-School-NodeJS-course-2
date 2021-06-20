import {Task , ITask} from './task.model';


const getAllTasks = async (boardId:string) => await Task.find({ boardId: boardId});

const getTask = async (boardId: string, taskId:string) => Task.findOne({id: taskId, boardId: boardId});
 
const createTask = async (boardId:string, body: ITask) => {
  const task = new Task({ ...body, boardId: boardId});
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
    console.log('adasdasdasdasdas', body);
    await Task.update(taskId, body);
    return Task.findOne(taskId);

    // const user = await User.findOne({id: userId});
    // if (!user) {
    //     throw new Error('User not found');
    // }
    // await User.update(userId, body);
    // return User.findOne(userId);
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