import { UserGateway } from "../gateways/userGateway";
import { UserType, User } from "../entities/user";

export class GetUserByTypeUC {
  constructor(private db: UserGateway) {}

  private USERS_PER_PAGE = 3;

  public async execute(
    input: GetUserByTypeUCInput
  ): Promise<GetUserByTypeUCOutput> {
    let orderBy = "name";
    if (input.orderBy === "name" || input.orderBy === "email") {
      orderBy = input.orderBy;
    } else {
      if (input.orderBy !== undefined) {
        throw new Error("Invalid orderBy");
      }
    }

    let orderType = UserOrderType.ASC;
    if (input.orderType === "DESC") {
      orderType = UserOrderType.DESC;
    } else if (input.orderType === "ASC") {
      orderType = UserOrderType.ASC;
    } else if (input.orderType !== undefined) {
      throw new Error("Invalid orderType");
    }

    const type = User.mapStringsToUserType(input.type);

    let page = input.page >= 1 ? input.page : 1;
    const offset = this.USERS_PER_PAGE * (page - 1);

    const users = await this.db.getUserByType(
      type,
      orderBy,
      orderType,
      this.USERS_PER_PAGE,
      offset
    );

    return {
      users: users.map(user => {
        return {
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          type: user.getType()
        };
      })
    };
  }
}

export interface GetUserByTypeUCInput {
  type: string;
  orderBy: string;
  orderType: UserOrderType;
  page: number;
}

export interface GetUserByTypeUCOutput {
  users: GetUserByTypeUCOutputUsers[];
}

export interface GetUserByTypeUCOutputUsers {
  id: string;
  name: string;
  email: string;
  type: UserType;
}

export enum UserOrderType {
  ASC = "ASC",
  DESC = "DESC"
}
