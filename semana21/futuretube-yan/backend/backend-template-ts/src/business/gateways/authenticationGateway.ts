import { UserType } from "../entities/user";

export interface AuthenticationGateway {
  generateToken(input: UsersInfoForToken): string;
  getUsersInfoFromToken(token: string): UsersInfoForToken;
}

// userId, type

export interface UsersInfoForToken {
  userId: string;
  type: UserType;
}
