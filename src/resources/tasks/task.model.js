const { v4: uuidv4 } = require('uuid');

/**
 * Task class.
 */
class Task {
      /**
   * Task constructor.
   * @param {string} id - instance id.
   * @param {string} title - task name.
   * @param {string} order -  task order.
   * @param {string} description - task description.
   * @param {string} userId - user id created this task.
   * @param {string} boardId - board id where the task is located.
   * @param {string} columnId - column id.
   */
  constructor({
    id = uuidv4(),
    title = 'Task',
    order = 'Order',
    description = 'Description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;