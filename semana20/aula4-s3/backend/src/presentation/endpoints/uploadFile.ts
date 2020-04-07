import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { UploadedFileUC } from "../../business/usecase/uploadFile";
import { S3 } from "aws-sdk";

export const uploadFileEndPoint = async( req:Request, res:Response) => {
    try{
        if(!req.files){
            res.status(400)
            return
        }
        const upload = req.files.arquivo as UploadedFile
        const uc = new UploadedFileUC(new S3(""))
        const response = await uc.execute({
            file: upload
        })

        res.status(200).send(response)
    } catch(err){
        res.status(500).send(err)
        return
    }
}