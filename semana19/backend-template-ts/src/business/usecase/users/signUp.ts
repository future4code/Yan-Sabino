import { UserGateway } from "../../gateways/userGateway";
import { v4 } from "uuid";
import * as bcrypt from "bcrypt";
import { User } from "../../entities/user";
import * as jwt from "jsonwebtoken";

export class SignUpUC {
  constructor(private userGateway: UserGateway) {}

  public async execute(input: SignUpUCInput) {
    const id = v4();
    const SALT_ROUNDS = 10;
    const hashPassword = await bcrypt.hash(input.password, SALT_ROUNDS);
    const user = new User(id, input.name, input.email, hashPassword);

    const token = jwt.sign(
      { id: user.getId(), email: user.getEmail() },
      "bananinha",
      { expiresIn: "1h" }
    );

    await this.userGateway.signUp(user);
    return {
      message: "User signed up sucessfully!",
      token
    };
  }
}

export interface SignUpUCInput {
  name: string;
  email: string;
  password: string;
}


