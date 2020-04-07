import { Request, Response } from "express";
import { CreateUserUC } from "../../business/usecase/createUser";
import { UserDatabase } from "../../data/userDatabase";
import { JwtAuthorizer } from "../../services/jwtAuthorizer";
import { BcryptService } from "../../services/bcryptService";

export const createUserEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new CreateUserUC(
      new UserDatabase(),
      new JwtAuthorizer(),
      new BcryptService()
    );

    const result = await uc.execute({
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      password: req.body.password
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errMessage: err.message
    });
  }
};
