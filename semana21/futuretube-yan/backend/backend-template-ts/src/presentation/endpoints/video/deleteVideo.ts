import { Request, Response } from "express";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { VideoDB } from "../../../data/videoDB";
import { DeleteVideoUC } from "../../../business/usecase/video/deleteVideo";

export const deleteVideoEndPoint = async (req: Request, res: Response) => {
  try {
    const jwtAuth = new JwtAuthorizer();
    const videoDB = new VideoDB();
    const userInfo = jwtAuth.getUsersInfoFromToken(req.headers.auth as string);
    const uc = new DeleteVideoUC(videoDB);

    const input = {
      userId: userInfo.id,
      videoId: req.body.videoId,
    };

    await uc.execute(input);
    res.status(200).send({
      message: "Video deleted successfully",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};
