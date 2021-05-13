const BD = require('../../db/db');

const getAllUsers = async () => {
  const data = await BD.getAllUsers();
  return data
};

 const getUser = async (userId) => {
   const user = await BD.getUser(userId);
   return user
 }

module.exports = { getAllUsers, getUser };
