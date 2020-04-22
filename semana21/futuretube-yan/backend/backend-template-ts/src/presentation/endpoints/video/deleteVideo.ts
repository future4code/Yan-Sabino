import { Request, Response } from "express";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { VideoDB } from "../../../data/videoDB";
import { DeleteVideoUC } from "../../../business/usecase/video/deleteVideo";

export const deleteVideoEndPoint = async (req: Request, res: Response) => {
  try {
    const jwtAuth = new JwtAuthorizer();
    const videoDB = new VideoDB();
    const uc = new DeleteVideoUC(videoDB, jwtAuth);

    const input = {
      token: req.headers.Authorization as string,
      videoId: req.params.videoId,
    };

    const result = await uc.execute(input);

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};
