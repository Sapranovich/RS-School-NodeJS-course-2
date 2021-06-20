import { ConnectionOptions } from "typeorm";
import { User } from './resources/users/user.model';
import { Task } from './resources/tasks/task.model';
import { Board } from './resources/boards/board.model';
import { DB_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_HOST } from './common/config';

export const config = {
  "type": 'postgres',
  "synchronize": true,
  "host": POSTGRES_HOST,
  "port": DB_PORT,
  "username": POSTGRES_USER,
  "password": POSTGRES_PASSWORD,
  "database": POSTGRES_DB,
  "autoReconnect": true,
  "reconnectTries": Number.MAX_VALUE,
  "entities": [User, Task, Board],
  "reconnectionInterval": 1000
} as ConnectionOptions