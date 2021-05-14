const { v4: uuidv4 } = require('uuid');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const db = {
  Users: [],
  Boards: [],
  Tasks: [],
};

//  Заполнение Базы данных
const UserIds = Array(5)
  .fill()
  .map(() => uuidv4());
db.Users.push(...UserIds.map(id => new User({ id })));
db.Boards.push(new Board());
db.Users.map((user, index) => {
  const userId = user.id;
  const boardId = db.Boards[0].id;
  const columnId = db.Boards[0].columns[0].id;
  return db.Tasks.push(
    ...Array(index + 1)
      .fill()
      .map(() => new Task({ id: userId, boardId, columnId }))
  );
});
// ===============================================================

// ======================================================= получить все данные категории
const getAllUsers = () => db.Users.filter((entity) => entity);
const getAllBoards = () => db.Boards.filter((entity) => entity);
const getAllTasks = (boardId) =>
  db.Tasks.filter((task) => task.boardId === boardId);
// =====================================================================================

// ======================================================= получить данные по id
const getUser = (userId) => {
  const resault = db.Users.filter((user) => user.id === userId)[0];
  return resault;
};
const getBoard = (boardId) => {
  const resault = db.Boards.filter((board) => board.id === boardId)[0];
  return resault;
};
const getTask = (boardId, taskId) => {
  const resault = db.Tasks.filter(
    (task) => task.boardId === boardId && task.id === taskId
  )[0];
  return resault;
};
// =====================================================================================

// ======================================================= Добавление новой позиции в категории
const createUser = (body) => {
  const id = uuidv4();
  const newUser = new User({ id, ...body });
  db.Users.push(newUser);
  return db.Users.filter((user) => user.id === id)[0];
};
const createTask = (body) => {
  const id = uuidv4();
  const newTask = new Task({ id, ...body });
  db.Tasks.push(newTask);
  return db.Tasks.filter((task) => task.id === id);
};

// ======================================================================================

//  ================== удаление 
const removeUser = (userId) => {
  const userIndex = db.Users.findIndex(user => user.id === userId);
  return db.Users.pop(userIndex, 1);
};
//= ==============

// ============= обновление

const updateUser = (userId, body) => {
  const userIndex = db.Users.findIndex(user => user.id === userId);
  db.Users[userIndex] = {id:userId, ...body};
  return db.Users[userIndex];
}

module.exports = {
  getAllUsers,
  getAllBoards,
  getAllTasks,
  getUser,
  getBoard,
  getTask,
  createUser,
  createTask,
  removeUser,
  updateUser
};
