"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class BaseDB {
    constructor() {
        this.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB
            }
        });
    }
}
exports.BaseDB = BaseDB;
// export abstract class BaseDB {
//     protected connection = knex({
//       client: "mysql",
//       connection: {
//         host: "ec2-34-229-180-237.compute-1.amazonaws.com",
//         port: 3306,
//         user: "yan",
//         password: "123456",
//         database: "yan_db",
//       },
//     });
//   }
