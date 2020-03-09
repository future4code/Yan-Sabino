import { Request, Response } from "express";
import { EditUsersUC } from "../../business/usecase/editUsers";
import { UserDB } from "../../data/userDataBase";

export const editUsersEndPoint = async (req: Request, res: Response) => {
  try {
    const editUserUC = new EditUsersUC(new UserDB())
    const result = await editUserUC.execute({
      id: req.body.id,
      email: req.body.email,
      name: req.body.name
    })
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
