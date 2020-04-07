import { Request, Response } from "express";
import { GetAllStudentsUC } from "../../business/usecase/getAllStudents";
import { UserDatabase } from "../../data/userDB";
import { JwtAuthorizer } from "../../services/jwtAuthorizer";

export const getAllStudentsEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetAllStudentsUC(new UserDatabase());

    const token = req.headers.auth as string;
    const jwtAuthorizer = new JwtAuthorizer();
    const userInfo = jwtAuthorizer.getUsersInfoFromToken(token);

    const result = await uc.execute({
      type: userInfo.type
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errMessage: err.message
    });
  }
};
