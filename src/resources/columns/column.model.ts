import { v4 as uuidv4 } from 'uuid';

export interface IColumn {
  id?: string,
  title?: string,
  order?: number
}
/**
 * Column class.
 */
export class Column implements IColumn {
  id: string;

  order: number;

  title: string;

  /**
* Column constructor.
* @param {string} id - instance id.
* @param {string} title - column title.
* @param {number} order - column order.
*/
  constructor({ id = uuidv4(), title = '', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order
  }
}