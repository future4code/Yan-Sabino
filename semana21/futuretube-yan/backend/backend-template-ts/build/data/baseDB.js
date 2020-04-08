"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
// export abstract class BaseDB {
//     private connectionData = {
//         host: process.env.DB_HOST,
//         port: 3306,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB
//     };
//     protected connection = knex({
//         client: process.env.DB_CLIENT as string,
//         connection: this.connectionData
//     });
// }
class BaseDB {
    constructor() {
        this.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: "ec2-34-229-180-237.compute-1.amazonaws.com",
                port: 3306,
                user: "yan",
                password: "123456",
                database: "yan_db"
            }
        });
    }
}
exports.BaseDB = BaseDB;
