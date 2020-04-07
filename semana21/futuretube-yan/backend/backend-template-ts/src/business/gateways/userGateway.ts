import { UserType, User } from "../entities/user";

export interface UserGateway {
  getUserByType(
    type: UserType,
    orderBy: string,
    orderType: string,
    limit: number,
    offset: number
  ): Promise<User[]>;
  createUser(user: User): Promise<void>;
  getAllStudents(): Promise<User[]>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserById(id: string): Promise<User | undefined>;
  updatePassword(userId: string, newPassword: string): Promise<void>;
}
