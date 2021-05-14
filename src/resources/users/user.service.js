const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();

const getUser = (userId) => usersRepo.getUser(userId);

const createUser = (body) => usersRepo.createUser(body);

const removeUser = (userId) => usersRepo.removeUser(userId);

const updateUser = (userId, body) => usersRepo.updateUser(userId, body);

module.exports = { getAllUsers, getUser, createUser, removeUser, updateUser };
