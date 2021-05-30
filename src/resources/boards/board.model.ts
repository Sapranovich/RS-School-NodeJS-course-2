import { v4 as uuidv4 } from 'uuid';
import { Column, IColumn } from "../columns/column.model";

export interface IBoard {
  id?: string,
  title: string,
  columns: Array<IColumn>
}

/**
 * Board class.
 */
export class Board implements IBoard {
  id: string;

  title: string;

  columns: Array<IColumn>;
  /**
   * Board constructor.
   * @param {string} id - instance id.
   * @param {string} title - boadr name.
   * @param {Object} Column - Colunm instance.
   */

  constructor({ id = uuidv4(), title = 'RS School', columns = new Array<IColumn>() } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [...columns.map((item: IColumn) => new Column(item))];
  }
}