import { Request, Response } from "express";
import { VideoDB } from "../../../data/videoDB";
import { GetAllVideoInfosUC } from "../../../business/usecase/video/getAllVideoInfos";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const getAllVideoInfos = async (req: Request, res: Response) => {
    try {
       const videoDB = new VideoDB()
       const jwtAuth = new JwtAuthorizer()
       const uc = new GetAllVideoInfosUC(videoDB, jwtAuth)
       const result = await uc.execute({
           token: req.headers.auth as string,
           videoId: req.query.videoId
       })
       res.status(200).send(result)
    } catch (err) {
        res.status(err.errCode || 404).send({
            message: err.message,
        }); 
    }
}