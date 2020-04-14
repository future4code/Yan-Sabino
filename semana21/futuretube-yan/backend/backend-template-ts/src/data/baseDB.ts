import knex from "knex";
import * as dotenv from "dotenv";
dotenv.config();

export abstract class BaseDB {
    
    protected connection = knex({
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
