import {
  AuthenticationGateway,
  UsersInfoForToken
} from "../business/gateways/authenticationGateway";
import * as jwt from "jsonwebtoken";

export class JwtAuthorizer implements AuthenticationGateway {
  private SECRET_KEY = "YAN";
  private expiresIn = "10h";

  public generateToken(input: UsersInfoForToken): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      this.SECRET_KEY,
      {
        expiresIn: this.expiresIn
      }
    );

    return token;
  }

  public getUsersInfoFromToken(token: string): UsersInfoForToken {
    const result = jwt.verify(token, this.SECRET_KEY) as UsersInfoForToken; // id, type
    return {
      id: result.id
    };
  }
}
