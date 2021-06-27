import { v4 as uuidv4 } from 'uuid';
import {Entity, Column as ColumnType, PrimaryColumn, BaseEntity}  from 'typeorm';


export interface IBoard {
  id?: string,
  title: string,
  columns: string
}

/**
 * Board class.
 */
@Entity({name: 'Board'})
export class Board extends BaseEntity {
  @PrimaryColumn('varchar', {length: 100})
  id: string;

  @ColumnType({ type: 'varchar'})
  title: string;

  @ColumnType({type: "json"})
  columns: string;
  /**
   * Board constructor.
   * @param {string} id - instance id.
   * @param {string} title - boadr name.
   * @param {Object} Column - Colunm instance.
   */

  constructor({ id = uuidv4(), title = 'RS School', columns = '[]' } = {}) {
    super();
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}