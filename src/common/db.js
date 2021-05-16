const { v4: uuidv4 } = require('uuid');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const  { BOARDS, USERS, TASKS } = require('./constants');

//  База данных и ее заполнение

const db = {
  [USERS]: [],
  [BOARDS]: [],
  [TASKS]: [],
};
const UserIds = Array(5).fill().map(() => uuidv4());
db[USERS].push(...UserIds.map(id => new User({ id })));
db[BOARDS].push(new Board());
db[USERS].map((user, index) => {
  const userId = user.id;
  const boardId = db[BOARDS][0].id;
  const columnId = db[BOARDS][0].columns[0].id;
  return db[TASKS].push(
    ...Array(index).fill().map(() => new Task({ id: userId, boardId, columnId }))
  );
});
// ===============================================================

//  Получить все данные по определенной категории

const getAllUsers = () => db[USERS].filter((entity) => entity);
const getAllBoards = () => db[BOARDS].filter((entity) => entity);
const getAllTasks = (boardId) => db[TASKS].filter((task) => task.boardId === boardId);
// ===============================================================

//  Получить данные по ID определенной категории
const getUser = (userId) => {
  const resault = db[USERS].filter((user) => user.id === userId)[0];
  return resault;
};
const getBoard = (boardId) => {
  const resault = db[BOARDS].filter((board) => board.id === boardId)[0];
  return resault;
};
const getTask = (boardId, taskId) => {
  const resault = db[TASKS].filter((task) => task.boardId === boardId && task.id === taskId)[0];
  return resault;
};
// ===============================================================

//  Добавление новой позиции в категорию
const createUser = (body) => {
  const id = uuidv4();
  const newUser = new User({ id, ...body });
  db[USERS].push(newUser);
  return db[USERS].filter((user) => user.id === id)[0];
};
const createTask = (boardId, body) => {
  const id = uuidv4();
  const newTask = new Task({ id, ...body, boardId });
  db[TASKS].push(newTask);
  return db[TASKS].filter((task) => task.id === id)[0];
};
const createBoard = (body) => {
  const boardId = uuidv4();
  const newBoard = {
    id: boardId,
    ...body,
    columns: body.columns.map((column, index ) => ({
        id: uuidv4(),
        ...body.columns[index]
      }))  
    
  }
  db[BOARDS].push(new Board(newBoard));
  return db[BOARDS].filter(board => board.id === boardId)[0];
}

// ===============================================================

//  Удаление позиции из категории
const removeUser = (userId) => {
  const userIndex = db[USERS].findIndex(user => user.id === userId);
  db[TASKS].forEach((task, index) => {
    if(task.userId === userId){
      db[TASKS][index] = { ...task, userId: null }
    }
  });
  return db[USERS].splice(userIndex, 1);
};

const removeBoard = (boardId) => {
  const boardIndex = db[BOARDS].findIndex(board => board.id === boardId);
  db[TASKS].forEach((task, index) => {
    if(task.boardId === boardId){
      db[TASKS][index] = { ...task, boardId: null }
    }
  });
  return db[BOARDS].splice(boardIndex, 1);
}

const removeTask = (taskId) => {
  const taskIndex = db[TASKS].findIndex(task => task.id === taskId);
  return db[TASKS].splice(taskIndex, 1);
}

// ===============================================================

//  Обновление позиции из категории
const updateUser = (userId, body) => {
  const userIndex = db[USERS].findIndex(user => user.id === userId);
  db[USERS][userIndex] = {id:userId, ...body};
  return db[USERS][userIndex];
}

const updateBoard = (boardId, body) => {
  const boardIndex = db[BOARDS].findIndex(board => board.id === boardId);
  db[BOARDS][boardIndex] = {id:boardId, ...body};
  return db[BOARDS][boardIndex];
}

const updateTask = (taskId, body) => {
  const taskIndex = db[TASKS].findIndex(task => task.id === taskId);
  db[TASKS][taskIndex] = {
    id:taskId,
    ...body
  }
  return db[TASKS][taskIndex]
}

// ===============================================================

module.exports = {
  getAllUsers,
  getAllBoards,
  getAllTasks,
  getUser,
  getBoard,
  getTask,
  createUser,
  createTask,
  createBoard,
  removeUser,
  removeBoard,
  removeTask,
  updateUser,
  updateBoard,
  updateTask
};
