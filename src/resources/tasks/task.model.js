const { v4: uuidv4 } = require('uuid');

class Task {
  constructor(userId, boardId, columnId) {
    this.id = uuidv4();
    this.title ='Task';
    this.order = 'Order';
    this.description = 'Description';
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;