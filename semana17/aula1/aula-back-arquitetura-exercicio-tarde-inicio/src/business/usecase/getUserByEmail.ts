import { User } from "../entities/user";
import { UserDB } from "../../data/userDataBase"

export class GetUserByEmailUC {
  constructor(private userDB: UserDB){}

  public async execute(
    input: GetUserByEmailUCInput
  ): Promise<GetUserByEmailUCOutput> {

    const user = await this.userDB.getUsersByEmail(input.email)
    if (!(input.email && input.email.indexOf("@") !== -1)) {
      throw new Error("Invalid email");
    }

    // const user = new User("", "", "", new Date());

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      birthDate: user.getBirthDate()
    };
  }
}

export interface GetUserByEmailUCInput {
  email: string;
}

export interface GetUserByEmailUCOutput {
  id: string;
  email: string;
  name: string;
  birthDate: Date;
}
