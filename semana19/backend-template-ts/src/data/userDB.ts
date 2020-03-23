import { BaseDB } from "./baseDB";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/user";
import { DuplicateUserError } from "../business/error/duplicateUserError";

export class UserDB extends BaseDB implements UserGateway {
  private userTableName = "users";

  async signUp(user: User) {
    try {
      await this.connection
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword()
        })
        .into(this.userTableName);
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY") {
        throw new DuplicateUserError();
      } else {
        throw err;
      }
    }
  }
}
