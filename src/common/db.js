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
/**
 * This function returns an array of all users
 * @returns {Array} Empty array or an array of objects of the form {
    "id": string,
    "name": string,
    "login": string
  }
 */
const getAllUsers = () => db[USERS].filter((entity) => entity);


/**
 * This function returns an array of all boards
 * @returns Empty array or an array of objects of the form {
    "id": string,
    "title": string,
    "columns": [
      {
        "id": string,
        "title": string,
        "order": number
      }
    ]
  }
 */
const getAllBoards = () => db[BOARDS].filter((entity) => entity);


/**
 * This function returns an array of all tasks current boart
 * @param {string} boardId 
 * @returns Empty array or an array of objects of the form {
    "id": string,
    "title": string,
    "order": string,
    "description": string,
    "userId": string,
    "boardId": boardId,
    "columnId": string
  }
 */
const getAllTasks = (boardId) => db[TASKS].filter((task) => task.boardId === boardId);
// ===============================================================



//  Получить данные по ID определенной категории


/**
 * This function returns a object user by id
 * @param {string} userId 
 * @returns object of the form {
    "id": userId,
    "name": string,
    "login": string
  }
 */
const getUser = (userId) => {
  const resault = db[USERS].filter((user) => user.id === userId)[0];
  return resault;
};


/**
 * This function returns a object board by id
 * @param {string} boardId 
 * @returns object of the form {
    "id": string,
    "title": string,
    "columns": [
      {
        "id": string,
        "title": string,
        "order": number
      }
    ]
  }
 */
const getBoard = (boardId) => {
  const resault = db[BOARDS].filter((board) => board.id === boardId)[0];
  return resault;
};


/**
 * This function returns a object task by id
 * @param {string} boardId 
 * @param {string} taskId 
 * @returns  object of the form {
    "id": string,
    "title": string,
    "order": string,
    "description": string,
    "userId": string,
    "boardId": boardId,
    "columnId": string
  }
 */
const getTask = (boardId, taskId) => {
  const resault = db[TASKS].filter((task) => task.boardId === boardId && task.id === taskId)[0];
  return resault;
};
// ===============================================================

//  Добавление новой позиции в категорию
/**
 * This function create new user and returns object created user
 * @param {{
 * id: userId, 
 * name: string, 
 * login: string, 
 * password: string
 * }} body 
 * @returns object of the form {
    "id": string,
    "name": string,
    "login": string
  } or undefined
 */

const createUser = (body) => {
  const id = uuidv4();
  const newUser = new User({ id, ...body });
  db[USERS].push(newUser);
  return db[USERS].filter((user) => user.id === id)[0];
};

/**
 * This function create new task and returns object created task
 * @param {string} boardId 
 * @param {{"title": string,
 * "order": string, 
 * "description": string, 
 * "userId": string,
 * "boardId": boardId,
 * "columnId": string}} body 
 * @returns object of the form {
    "id": string,
    "title": string,
    "order": string,
    "description": string,
    "userId": string,
    "boardId": boardId,
    "columnId": string
  }
 */
const createTask = (boardId, body) => {
  const id = uuidv4();
  const newTask = new Task({ id, ...body, boardId });
  db[TASKS].push(newTask);
  return db[TASKS].filter((task) => task.id === id)[0];
};

/**
 * This function create new board and returns object created board
 * @param {{"title": string,
 * "columns": [ {"title": string, "order": number} ]
 * }} body 
 * @returns object of the form {
    "id": string,
    "title": string,
    "columns": [
      {
        "id": string,
        "title": string,
        "order": number
      }
    ]
  }
 */
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
/**
 * This function delete object user and returns object  deleted user. 
 * @param {string} userId 
 * @returns object of the form {
    "id": string,
    "name": string,
    "login": string
  }
 */
const removeUser = (userId) => {
  const userIndex = db[USERS].findIndex(user => user.id === userId);
  db[TASKS].forEach((task, index) => {
    if(task.userId === userId){
      db[TASKS][index] = { ...task, userId: null }
    }
  });
  return db[USERS].splice(userIndex, 1);
};


/**
 * This function delete object board and returns object deleted board
 * @param {string} boardId 
 * @returns object of the form {
    "id": string,
    "title": string,
    "columns": [
      {
        "id": string,
        "title": string,
        "order": number
      }
    ]
  }
 */
const removeBoard = (boardId) => {
  const boardIndex = db[BOARDS].findIndex(board => board.id === boardId);
  const updateTasks = db[TASKS].filter(task => task.boardId !== boardId);
  db[TASKS] = updateTasks;
  // db[TASKS].forEach((task, index) => {
  //   if(task.boardId === boardId){
  //     db[TASKS][index] = { ...task, boardId: null }
  //   }
  // });
  return db[BOARDS].splice(boardIndex, 1);
}
/**
 * This function delete object task and returns object deleted task
 * @param {string} taskId 
 * @returns object of the form {
    "id": string,
    "title": string,
    "order": string,
    "description": string,
    "userId": string,
    "boardId": boardId,
    "columnId": string
  }
 */
const removeTask = (taskId) => {
  const taskIndex = db[TASKS].findIndex(task => task.id === taskId);
  return db[TASKS].splice(taskIndex, 1);
}

// ===============================================================


//  Обновление позиции из категории

/**
 * This function update data user by id and returns object updated user
 * @param {string} userId 
 * @param {{
 * id: userId, 
 * name: string, 
 * login: string, 
 * password: string
 * }} body 
 * @returns object of the form {
    "id": string,
    "name": string,
    "login": string
  }
 */
const updateUser = (userId, body) => {
  const userIndex = db[USERS].findIndex(user => user.id === userId);
  db[USERS][userIndex] = {id:userId, ...body};
  return db[USERS][userIndex];
}
/**
 * This function update data board by id and returns object updated board
 * @param {string} boardId 
 * @param {{"title": string,
 * "columns": [ {id: string, "title": string, "order": number} ]
 * }} body
 * @returns object of the form {
    "id": string,
    "title": string,
    "columns": [
      {
        "id": string,
        "title": string,
        "order": number
      }
    ]
  }
 */
const updateBoard = (boardId, body) => {
  const boardIndex = db[BOARDS].findIndex(board => board.id === boardId);
  db[BOARDS][boardIndex] = {id:boardId, ...body};
  return db[BOARDS][boardIndex];
}

/**
 * This function update data task by id and returns object updated task
 * @param {string} taskId 
* @param {{"title": string,
 * "order": string, 
 * "description": string, 
 * "userId": string,
 * "boardId": boardId,
 * "columnId": string}} body 
 * @returns object of the form {
    "id": string,
    "title": string,
    "order": string,
    "description": string,
    "userId": string,
    "boardId": boardId,
    "columnId": string
  }
 */
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
