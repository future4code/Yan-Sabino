import { UserGateway } from "../business/gateways/userGateway";
import { UserType, User } from "../business/entities/user";
import knex from "knex";

export class UserDatabase implements UserGateway {
  private connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      port: 3306,
      user: "teachers",
      password: "f443Bya!095dmmN",
      database: "professores"
    }
  });

  private usersTable = "USERS_AULA_PAGINACAO";

  private mapTypeToUserType(type: string): UserType {
    switch (type) {
      case "Professor":
        return UserType.TEACHERS;
      case "CX":
        return UserType.CX;
      case "Asian Nation":
        return UserType.ASIAN_NATION;
      case "Students":
        return UserType.STUDENTS;
      default:
        return UserType.STUDENTS;
    }
  }

  private mapUserTypeToDB(type: UserType): string {
    switch (type) {
      case UserType.TEACHERS:
        return "Professor";
      case UserType.CX:
        return "CX";
      case UserType.ASIAN_NATION:
        return "Asian Nation";
      case UserType.STUDENTS:
        return "Students";
      default:
        return "Students";
    }
  }
  // alteração inputs da minha função
  public async getUserByType(
    type: UserType,
    orderBy: string,
    orderType: string,
    limit: number,
    offset: number
  ): Promise<User[]> {
    console.log(`
    SELECT * FROM ${this.usersTable}
    LIMIT ${limit} OFFSET ${offset} 
    WHERE type = '${this.mapUserTypeToDB(type)}'
    ORDER BY ${orderBy} ${orderType}
  `);

    const result = await this.connection.raw(`
      SELECT * FROM ${this.usersTable}
      WHERE type = '${this.mapUserTypeToDB(type)}'
      ORDER BY ${orderBy} ${orderType}
      LIMIT ${limit} OFFSET ${offset} 
    `);

    return result[0].map((res: any) => {
      return new User(
        res.id,
        res.name,
        res.email,
        this.mapTypeToUserType(res.type) // Professor
      );
    });
  }

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
    INSERT INTO ${this.usersTable} (id, name, email, type, password)
    VALUES(
      '${user.getId()}',
      '${user.getName()}',
      '${user.getEmail()}',
      '${this.mapUserTypeToDB(user.getType())}',
      '${user.getPassword()}'
    )
  `);
  }

  public async getAllStudents(): Promise<User[]> {
    const res = await this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE type = "Students"
    `);

    return res[0].map((r: any) => {
      return new User(
        r.id,
        r.name,
        r.email,
        this.mapTypeToUserType(r.type),
        r.password
      );
    });
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE email = '${email}'
    `);

    if (!result[0][0]) {
      return undefined;
    }

    return new User(
      result[0][0].id,
      result[0][0].name,
      result[0][0].email,
      this.mapTypeToUserType(result[0][0].type),
      result[0][0].password
    );
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE id = '${id}'
    `);

    if (!result[0][0]) {
      return undefined;
    }

    return new User(
      result[0][0].id,
      result[0][0].name,
      result[0][0].email,
      this.mapTypeToUserType(result[0][0].type),
      result[0][0].password
    );
  }

  public async updatePassword(
    userId: string,
    newPassword: string
  ): Promise<void> {
    await this.connection.raw(`
      UPDATE ${this.usersTable}
      SET password = '${newPassword}'
      WHERE id = '${userId}'
    `);
  }
}
