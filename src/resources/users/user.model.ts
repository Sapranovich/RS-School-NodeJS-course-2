import { v4 as uuidv4 } from 'uuid';
import {Entity, Column, PrimaryColumn, BaseEntity} from 'typeorm';

export interface IUser {
  id?: string,
  name?: string,
  login?: string,
  password?: string
}
/**
 * User class.
 */
@Entity({name: 'User'})
export class User extends BaseEntity{
  @PrimaryColumn('varchar', {length: 100})
    id: string;

    @Column('varchar', {length: 100})
    name: string;

    @Column('varchar', {length: 100})
    login: string;

    @Column('varchar', {length: 100})
    password: string;
    /**
   * User constructor.
   * @param {string} id - instance id.
   * @param {string} name - user name.
   * @param {string} login - user login.
   * @param {string} password - user password.
   */

  constructor({
    id = uuidv4(),
    name = 'USER_NAME',
    login = 'user_login',
    password = '123123'
  } = {}) {
    super();
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

    /**
   * Takes a User object and returns only needed fields.
   * @param {Object} user - user instance.
   * @returns {{name, id, login}}
   * @static
   */

  static toResponse(user: IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}