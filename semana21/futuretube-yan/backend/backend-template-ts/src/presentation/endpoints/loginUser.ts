import { Request, Response } from "express";
import { UserDatabase } from "../../data/userDatabase";
import { JwtAuthorizer } from "../../services/jwtAuthorizer";
import { LoginUserUC } from "../../business/usecase/loginUser";
import { BcryptService } from "../../services/bcryptService";

export const loginUserEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new LoginUserUC(
      new UserDatabase(),
      new JwtAuthorizer(),
      new BcryptService()
    );

    const result = await uc.execute({
      email: req.body.email,
      password: req.body.password
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errMessage: err.message
    });
  }
};
