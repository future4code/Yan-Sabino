import { UserGateway } from "../gateways/userGateway";
import { User, UserType } from "../entities/user";

export class GetAllStudentsUC {
  constructor(private db: UserGateway) {}

  public async execute(input: GetAllUsersInput): Promise<GetAllUsersOutput> {
    // userId, type
    // type === TEACHERS
    if (User.mapStringsToUserType(input.type) !== UserType.TEACHERS) {
      throw new Error("Unauthorized");
    }

    const users = await this.db.getAllStudents();
    // banco me dá tudo ai
    return {
      users: users.map(u => {
        return {
          id: u.getId(),
          name: u.getName()
        };
      })
    };
  }
}

interface GetAllUsersInput {
  type: string;
}

interface GetAllUsersOutput {
  users: GetAllUsersOutputUser[];
}

interface GetAllUsersOutputUser {
  id: string;
  name: string;
}
