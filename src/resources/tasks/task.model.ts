import { v4 as uuidv4 } from 'uuid';
import {Entity, Column, PrimaryColumn, BaseEntity} from 'typeorm';

export interface ITask {
  id?: string;
  title?: string;
  order?: number;
  description?: string;
  boardId?: string | null;
  columnId?: string | null;
  userId?: string | null;
}
/**
 * Task class.
 */
@Entity({name: 'Task'})
export class Task extends BaseEntity{
  @PrimaryColumn('varchar', {length: 100})
  id: string;

  @Column('varchar', {length: 100})
  title: string;

  @Column({ type: 'integer',nullable: true })
  order: number;

  @Column('varchar', {length: 100})
  description: string;

  @Column({ type: 'varchar', nullable: true })
  boardId: string | null;

  @Column({ type: 'varchar', nullable: true })
  columnId: string | null;

  @Column({ type: 'varchar', nullable: true })
  userId: string | null;

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
    boardId = null,
    columnId = null
  } = {} as ITask) {
    super();
    this.id = id;
    this.title = title;
    this.order = Number(order);
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
