const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();

module.exports = { getAllUsers };
