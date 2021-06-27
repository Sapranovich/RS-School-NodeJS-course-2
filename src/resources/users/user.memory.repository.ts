// import { v4 as uuidv4 } from 'uuid';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { IUser, User } from './user.model';
import { Task } from '../tasks/task.model';


const getAllUsers = async () => User.find();

const getUser = async (userId: string) => {
  const user = await User.findOne({id: userId});
  if (!user) {
      throw new Error('User not found');
  }
  return user;
}

const createUser = async (body: IUser) => {
  const updateBody = {
    ...body,
    password:await bcrypt.hash(body.password.toString(), 10)
  }
  const user = new User(updateBody);
  await user.save();
  return user;
}

const removeUser = async (userId: string) => {
  const task = await getRepository(User).delete(userId);
  if(task){
    await getRepository(Task).update({userId}, {userId: null })
    return true;
  }
  return false;
}

const updateUser = async (userId: string, body: IUser) => {
  const user = await User.findOne({id: userId});
    if (!user) {
        throw new Error('User not found');
    }
    await User.update(userId, body);
    return User.findOne(userId);
}
// export default users;
export { getAllUsers, getUser, createUser, removeUser, updateUser };
