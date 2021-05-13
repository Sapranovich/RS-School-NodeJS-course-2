const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();

const getUser = (userId)  => usersRepo.getUser(userId);

module.exports = { getAllUsers, getUser };
