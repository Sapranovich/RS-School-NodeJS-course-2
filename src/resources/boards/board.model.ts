import { v4 as uuidv4 } from 'uuid';
import { Column, IColumn } from "../columns/column.model";
import {Entity, Column as ColumnType, PrimaryColumn, BaseEntity}  from 'typeorm';


export interface IBoard {
  id?: string,
  title: string,
  columns: Array<IColumn>
}

/**
 * Board class.
 */
 @Entity({name: 'Board'})
export class Board extends BaseEntity {
  @PrimaryColumn('varchar', {length: 100})
  id: string;
  
  @ColumnType('varchar', {length: 100})
  title: string;

  @ColumnType('varchar', {length: 100})
  columns: Array<IColumn>;
  /**
   * Board constructor.
   * @param {string} id - instance id.
   * @param {string} title - boadr name.
   * @param {Object} Column - Colunm instance.
   */

  constructor({ id = uuidv4(), title = 'RS School', columns = new Array<IColumn>() } = {}) {
    super();
    this.id = id;
    this.title = title;
    this.columns = [...columns.map((item: IColumn) => new Column(item))];
  }
}