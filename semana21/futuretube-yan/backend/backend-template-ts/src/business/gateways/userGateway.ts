import { User } from "../entities/user";

export interface UserGateway {
  signUp(user: User): Promise<void>;
  login(email: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>
}
