import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id?: string,
  title?: string,
  order?: number,
  description?: string,
  boardId?: string | null,
  columnId?: string,
  userId?: string | null,
}
/**
 * Task class.
 */
export class Task implements ITask{
  id: string;

  title: string;

  order: number;

  description: string;

  boardId: string;

  columnId: string;

  userId: string|null;

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
    order = 0,
    description = 'Description',
    userId = null,
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
