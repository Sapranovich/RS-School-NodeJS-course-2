import 'reflect-metadata';
import { createConnection, getConnection } from 'typeorm';
import { PORT } from './common/config';

import {app} from './app';
import { config } from './ormconfig';


(async () => {    
      let connection;
      try {
          connection=getConnection()
      } catch(err) {
          console.error(err);
      }
      try{
          if (connection) {
              if(connection.isConnected) await connection.connect()
          } else {
              await createConnection(config);
          }
          console.log('Connected!');
          
      } catch (err) {
          console.error(err);
      }  

    app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
})();