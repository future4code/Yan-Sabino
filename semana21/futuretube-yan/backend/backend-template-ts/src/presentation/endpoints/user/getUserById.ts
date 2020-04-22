import { Request, Response } from "express";
import { UserDatabase } from "../../../data/userDB";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { GetUserByIdUC } from "../../../business/usecase/user/getUserById";

export const getUserByIdEndPoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetUserByIdUC(new UserDatabase(), new JwtAuthorizer());

    const result = await uc.execute({
      token: req.headers.authorization as string,
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errMessage: err.message,
    });
  }
};
