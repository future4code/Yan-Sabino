import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { UserGateway } from "../../gateways/userGateway";

export class LogInUC {
  constructor(private userGateway: UserGateway) {}

  public async execute(input: LogInUCInput) {
    const user = await this.userGateway.logIn(input.email);

    if (!user) {
      throw new Error("Email Incorreto");
    }

    const isPassWordCorrect = await bcrypt.compare(
      input.password,
      user.getPassword()
    );

    if (!isPassWordCorrect) {
      throw new Error("Senha Incorreta");
    }

    const token = jwt.sign(
      { id: user.getId(), email: user.getEmail() },
      "bananinha",
      { expiresIn: "1h" }
    );

    return token;
  }
}

export interface LogInUCInput {
  email: string;
  password: string;
}
