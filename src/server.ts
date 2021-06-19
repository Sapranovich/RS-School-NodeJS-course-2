import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { typeOrmConfig } from './common/ormconfig';
import { PORT } from './common/config';

import {app} from './app';

(async () => {
    await createConnection(typeOrmConfig);
    console.log('PG connected.');

    app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
})();