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
const UserIds = Array(5).fill().map(uuidv4())
// const 
db.Users.push(...UserIds.map((id, index) => new User(id, index)))
db.Boards.push(new Board())
db.Users.map((user, index) => {
    const userId = user.id;
    const boardId = db.Boards[0].id;
    const columnId = db.Boards[0].columns[0].id;
   return db.Tasks.push(...Array(index+1).fill().map(new Task(userId, boardId, columnId ))) 
})
// ===============================================================
const getAllUsers = () => db.Users.filter(entity => entity);


module.exports = {
    getAllUsers
}