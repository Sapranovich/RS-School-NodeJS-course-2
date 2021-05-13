const BD = require('../../db/db');

const getAllUsers = async () => {
  const data = await BD.getAllUsers();
  return data
};

module.exports = { getAllUsers };
