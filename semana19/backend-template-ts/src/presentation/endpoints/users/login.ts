import { Request, Response } from "express";
import { LogInUC } from "../../../business/usecase/users/logIn";
import { UserDB } from "../../../data/userDB";

export const loginEndPoint = async (req: Request, res: Response) => {
  try {
    const loginUC = new LogInUC(new UserDB());
    const input = {
      email: req.body.email,
      password: req.body.password
    };
    const token = await loginUC.execute(input);
    res.send({ message: "User Logged In Successfully", token });
  } catch (err) {
    res.status(400).send({
      message: err.message
    });
  }
};
