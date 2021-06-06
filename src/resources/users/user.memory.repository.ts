import { v4 as uuidv4 } from 'uuid';
import { IUser, User } from './user.model';
// const BD = require('../../common/db');

const users: IUser[] = [];

const getAllUsers = async () => {
  return users.filter((entity) => entity)

};

const getUser = async (userId: string) => {
  return users.filter((user: IUser) => user.id === userId)[0]
  // if (!user) {
  //   throw new Error(`User with id ${userId} was not found`);
  // }
  // return user;
}

const createUser = async (body: IUser) => {
  const id = uuidv4();
  const newUser = new User({ id, ...body });
  users.push(newUser);
  
  return users.filter((user: IUser) => user.id === id)[0];
}

const removeUser = async (userId: string) => {
  const userIndex = users.findIndex((user: IUser) => user.id === userId);
  // db.Tasks.forEach((task, index) => {
  //   if(task.userId === userId){
  //     db.Tasks[index] = { ...task, userId: null }
  //   }
  // });
  return users.splice(userIndex, 1);
}

const updateUser = async (userId: string, body: IUser) => {
  const userIndex = users.findIndex((user: IUser) => user.id === userId);
  users[userIndex] = { id: userId, ...body };
  return users[userIndex];
}
export default users;
export { getAllUsers, getUser, createUser, removeUser, updateUser };
