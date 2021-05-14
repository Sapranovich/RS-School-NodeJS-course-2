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
// const UserIds = Array(5)
//   .fill()
//   .map(() => uuidv4());
// db.Users.push(...UserIds.map(id => new User({ id })));
// db.Boards.push(new Board());
// db.Users.map((user, index) => {
//   const userId = user.id;
//   const boardId = db.Boards[0].id;
//   const columnId = db.Boards[0].columns[0].id;
//   return db.Tasks.push(
//     ...Array(index)
//       .fill()
//       .map(() => new Task({ id: userId, boardId, columnId }))
//   );
// });
// ===============================================================

// ======================================================= получить все данные категории
const getAllUsers = () => db.Users.filter((entity) => entity);
const getAllBoards = () => db.Boards.filter((entity) => entity);
const getAllTasks = (boardId) => db.Tasks.filter((task) => task.boardId === boardId);
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
  const resault = db.Tasks.filter((task) => task.boardId === boardId && task.id === taskId)[0];
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
const createTask = (boardId, body) => {
  const id = uuidv4();
  const newTask = new Task({ id, ...body, boardId });
  db.Tasks.push(newTask);
  return db.Tasks.filter((task) => task.id === id)[0];
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
  db.Boards.push(new Board(newBoard));
  return db.Boards.filter(board => board.id === boardId)[0];
}

// ======================================================================================

//  ================== удаление 
const removeUser = (userId) => {
  const userIndex = db.Users.findIndex(user => user.id === userId);
  
  db.Tasks.forEach((task, index) => {
    if(task.userId === userId){
      db.Tasks[index] = { ...task, userId: null }
    }
  });

  return db.Users.splice(userIndex, 1);
};

const removeBoard = (boardId) => {
  const boardIndex = db.Boards.findIndex(board => board.id === boardId);
  
  db.Tasks.forEach((task, index) => {
    if(task.boardId === boardId){
      db.Tasks[index] = { ...task, boardId: null }
    }
  });

  return db.Boards.splice(boardIndex, 1);
}

const removeTask = (taskId) => {
  const taskIndex = db.Tasks.findIndex(task => task.id === taskId);
  return db.Tasks.splice(taskIndex, 1);
}
//= ==============

// ============= обновление

const updateUser = (userId, body) => {
  const userIndex = db.Users.findIndex(user => user.id === userId);
  db.Users[userIndex] = {id:userId, ...body};
  return db.Users[userIndex];
}

const updateBoard = (boardId, body) => {
  const boardIndex = db.Boards.findIndex(board => board.id === boardId);
  db.Boards[boardIndex] = {id:boardId, ...body};
  return db.Boards[boardIndex];
}

const updateTask = (taskId, body) => {
  const taskIndex = db.Tasks.findIndex(task => task.id === taskId);
  db.Tasks[taskIndex] = {
    id:taskId,
    ...body
  }
  return db.Tasks[taskIndex]
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
  createBoard,
  removeUser,
  removeBoard,
  removeTask,
  updateUser,
  updateBoard,
  updateTask
};
