import { User } from "../entities/user";

export interface UserGateway {
  signUp(user: User): Promise<void>;
  logIn(email: string): Promise<User | undefined>
}
