"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const typeorm_1 = require("typeorm");
const config_service_1 = require("../config/config.service");
exports.databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [config_service_1.ConfigService],
        useFactory: (config) => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: config.get('HOST'),
                port: +config.get('PORT_DB'),
                username: config.get('USERNAME'),
                password: config.get('PASSWORD'),
                database: config.get('DATABASE')
            });
            return dataSource.initialize();
        }
    }
];
//# sourceMappingURL=database.providers.js.map