import { ConnectionOptions } from "typeorm";
import { User } from './resources/users/user.model';
import { Task } from './resources/tasks/task.model';
import { Board } from './resources/boards/board.model';

export const config = {
  "type": 'postgres',
  "synchronize": true,
  "host": 'host.docker.internal',
  "port": 5432,
  "username": "postgres",
  "password": "example",
  "database": "db_example",
  "autoReconnect": true,
  "reconnectTries": Number.MAX_VALUE,
  "entities": [User, Task, Board],
  "reconnectionInterval": 1000
} as ConnectionOptions