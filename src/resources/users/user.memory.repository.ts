import { v4 as uuidv4 } from 'uuid';
import { IUser, User } from './user.model';


const getAllUsers = async () => User.find();

const getUser = async (userId: string) => {
  const user = await User.findOne(userId);

  if (!user) {
      throw new Error('User not found');
  }
  return user;
}

const createUser = async (body: IUser) => {
  const user = await new User(body);
  await user.save();
  return user;
}

const removeUser = async (userId: string) => {
  // const tasks = await tasksRepo.getAll();

  // if (tasks.length) {
  //     tasks.forEach(async (task: Task) => {
  //         if (task.userId === id) {
  //             await tasksRepo.update(task.id, { ...task, userId: null });
  //         }
  //     });
  // }
}

const updateUser = async (userId: string, body: IUser) => {
  const user = await User.findOne(userId);

    if (!user) {
        throw new Error('User not found');
    }

    await User.update(userId, body);

    return User.findOne(userId);
}
// export default users;
export { getAllUsers, getUser, createUser, removeUser, updateUser };
