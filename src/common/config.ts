import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export const { SECRET_STRING, POSTGRES_HOST, PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE, DB_PORT, POSTGRES_PASSWORD, POSTGRES_IMAGE, NODE_WEB_APP_IMAGE, POSTGRES_USER, POSTGRES_DB } = process.env;