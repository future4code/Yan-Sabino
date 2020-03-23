import * as jwt from "jsonwebtoken";

export class JWTAuthentication {
  generateToken(id: string) {
    return jwt.sign({ id }, "bananinha", {
      expiresIn: "1h"
    });
  }

  verifyToken(token: string): string {
    const data = jwt.verify(token, "bananinha") as { id: string };

    return data.id;
  }
}
