import { UserDB } from "../../data/userDataBase";

export class EditUsersUC {
  constructor(private userDB: UserDB) {}
  public async execute(input: EditUsersUCInput): Promise<any> {
    const user = await this.userDB.getUserById(input.id);

    if (!input.id) {
      throw new Error("User id not found");
    }

    if (!user) {
      throw new Error("User not found");
    }

    if (input.name !== undefined) {
      if (input.name === "") {
        throw new Error("Invalid Name");
      } else {
        user.setName(input.name);
      }
    }

    if (input.email !== undefined) {
      if (input.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      } else {
        user.setEmail(input.email);
      }
    }

    if (input.birthDate !== undefined) {
      user.setBirthDate(new Date(input.birthDate));
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
  birthDate: string;
}

export interface EditUsersUCOutPut {
  message: string;
}
