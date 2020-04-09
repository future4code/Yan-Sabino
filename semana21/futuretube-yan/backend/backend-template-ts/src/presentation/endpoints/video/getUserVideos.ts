import { Request, Response } from "express";
import { VideoDB } from "../../../data/videoDB";
import { GetUserVideosUC } from "../../../business/usecase/video/getUserVideos";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const getUserVideosEndPoint = async (req: Request, res: Response) =>{
    try {
        const videoDB = new VideoDB()
        const jwtAuth = new JwtAuthorizer()
        const getUserVideoUC = new GetUserVideosUC(videoDB, jwtAuth)
       

        const input = {
            userId: req.query ? req.query.userId : "",
            token : req.headers.auth as string
        }

        const result = await getUserVideoUC.execute(input)
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err.message)
    }
}