import { Request, Response } from "express";
import { DeleteUserUC } from "../../../business/usecase/users/deleteUser";
import { PostDB } from "../../../data/postDataBase";

export const deleteUserEndpoint = async (req: Request, res: Response) => {
  try {
    const deleteUserUC = new DeleteUserUC(new PostDB());
    await deleteUserUC.execute({
      id: req.params.id
    });

    res.status(200).send({
      message: "post deleted"
    });
  } catch (err) {
    res.status(400).send({
      message: err.message
    });
  }
};
