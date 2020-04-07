import {
  AuthenticationGateway,
  UsersInfoForToken
} from "../business/gateways/authenticationGateway";
import * as jwt from "jsonwebtoken";

export class JwtAuthorizer implements AuthenticationGateway {
  private SECRET_KEY = "GOLI";
  private expiresIn = "10h";

  public generateToken(input: UsersInfoForToken): string {
    const token = jwt.sign(
      {
        userId: input.userId,
        type: input.type
      },
      this.SECRET_KEY,
      {
        expiresIn: this.expiresIn
      }
    );

    return token;
  }

  public getUsersInfoFromToken(token: string): UsersInfoForToken {
    const result = jwt.verify(token, this.SECRET_KEY) as UsersInfoForToken; // userId, type
    return {
      userId: result.userId,
      type: result.type
    };
  }
}
