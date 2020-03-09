import { UserDB } from "../../data/userDataBase";
import { v4 } from "uuid";

export class EditUsersUC {
  constructor(private userDB: UserDB) {}
  public async execute(input: EditUsersUCInput): Promise<EditUsersUCOutPut> {
    const user = await this.userDB.getUserById(input.id);
    if (!user) {
      throw new Error("User not found");
    }

    if (input.name !== undefined) {
      if (input.name === "") {
        throw new Error("Invalid Name");
      }

      user.setName(input.name);
    }

    if (input.email !== undefined) {
      if (input.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      user.setEmail(input.email);
    }
    await this.userDB.updateUser(user);

    return {
      message: "User Updated SuccessFully"
    };
  }
}

export interface EditUsersUCInput {
  id: string;
  email: string;
  name: string;
  
}

export interface EditUsersUCOutPut {
  message: string;
}
