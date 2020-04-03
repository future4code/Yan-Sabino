import knex from "knex";

export abstract class BaseDatabase {
  private connectionData = {
    host: "ec2-34-229-180-237.compute-1.amazonaws.com",
    port: 3306,
    user: "yan",
    password: "123456",
    database: "yan_db"
  };

  protected connection = knex({
    client: "mysql",
    connection: this.connectionData
  });
}
