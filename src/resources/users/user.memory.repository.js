const BD = require('../../db/db');

const getAllUsers = async () => {
  const data = await BD.getAllUsers();
  return data
};

 const getUser = async (userId) => {
   const user = await BD.getUser(userId);
   return user
 }

 const createUser = async (body) => {
   const user = await BD.createUser(body);
   return user;
 }

 const removeUser = async (userId) => {
    const resault = await BD.removeUser(userId);
    return resault;
 }

 const updateUser = async (userId, body) => {
    const user = await BD.updateUser(userId, body);
    return user;
 }

module.exports = { getAllUsers, getUser, createUser, removeUser, updateUser };
