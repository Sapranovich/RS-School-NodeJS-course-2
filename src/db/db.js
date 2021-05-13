const { v4: uuidv4 } = require('uuid');
const User = require("../resources/users/user.model")
const Board = require("../resources/boards/board.model");
const Task = require("../resources/tasks/task.model");

const db = {
    Users:[],
    Boards: [],
    Tasks: []
}

//  Заполнение Базы данных
const UserIds = Array(5).fill().map(() => uuidv4())
db.Users.push(...UserIds.map((id, index) => new User(id, index)))
db.Boards.push(new Board())
db.Users.map((user, index) => {
    const userId = user.id;
    const boardId = db.Boards[0].id;
    const columnId = db.Boards[0].columns[0].id;
    return db.Tasks.push(...Array(index+1).fill().map(() => new Task(userId, boardId, columnId ))) 
})
// ===============================================================

// ======================================================= получить все данные категории 
const getAllUsers = () => db.Users.filter(entity => entity);
const getAllBoards = () => db.Boards.filter(entity => entity);
const getAllTasks = (boardId) => db.Tasks.filter(task => task.boardId === boardId)
// =====================================================================================

// ======================================================= получить данные по id  
const getUser = (userId) => {
  const resault = db.Users.filter(user => user.id === userId)[0];
  return resault
} 
const getBoard = (boardId) => {
    const resault = db.Boards.filter(board => board.id === boardId)[0];
    return resault
}
const getTask = (boardId, taskId) => {
    const resault = db.Tasks.filter(task => task.boardId === boardId && task.id === taskId)[0];
    return resault
}
// =====================================================================================

module.exports = {
    getAllUsers,
    getAllBoards,
    getAllTasks,
    getUser,
    getBoard,
    getTask
}