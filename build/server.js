"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const config_1 = require("./common/config");
const app_1 = require("./app");
const ormconfig_1 = require("./ormconfig");
(async () => {
    let connection;
    try {
        connection = typeorm_1.getConnection();
    }
    catch (err) {
        console.error(err);
    }
    try {
        if (connection) {
            if (connection.isConnected)
                await connection.connect();
        }
        else {
            await typeorm_1.createConnection(ormconfig_1.config);
        }
        console.log('Connected!');
    }
    catch (err) {
        console.error(err);
    }
    app_1.app.listen(config_1.PORT, () => console.log(`App is running on http://localhost:${config_1.PORT}`));
})();
