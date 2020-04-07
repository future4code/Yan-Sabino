import knex from "knex";

export abstract class BaseDatabase {
  private connectionData = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
  };

  protected connection = knex({
    client: process.env.DB_CLIENT as string,
    connection: this.connectionData
  });
}