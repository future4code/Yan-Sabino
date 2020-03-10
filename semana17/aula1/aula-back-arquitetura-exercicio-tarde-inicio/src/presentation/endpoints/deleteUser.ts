import { Request, Response } from "express";
import { UserDB } from "../../data/userDataBase";
import { DeleteUserUC } from "../../business/usecase/deleteUser";

export const deleteUserEndPoint = async (req: Request, res: Response) => {
  try {
    const deleteUserUC = new DeleteUserUC(new UserDB());

    await deleteUserUC.execute({
      id: req.params.id
    });

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message
    });
  }
};
