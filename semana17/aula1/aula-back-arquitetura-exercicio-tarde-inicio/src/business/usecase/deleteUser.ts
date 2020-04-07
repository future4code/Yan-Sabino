import { UserDB } from "../../data/userDataBase";

export class DeleteUserUC {
  constructor(private userDB: UserDB) {}

  public async execute(input: DeleteUserByIdUCInput): Promise<void> {
    if (!input.id) {
      throw new Error("user id is invalid");
    }

    const user = await this.userDB.getUserById(input.id);
    if (!user) {
      throw new Error("User not found");
    }

    await this.userDB.deleteUser(input.id);
  }
}

export interface DeleteUserByIdUCInput {
  id: string;
}
