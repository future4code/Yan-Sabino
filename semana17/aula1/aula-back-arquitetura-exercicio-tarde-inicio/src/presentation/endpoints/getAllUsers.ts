import { Request, Response } from "express";
import { UserDB } from '../../data/userDataBase';
import { GetAllUsersUC } from '../../business/usecase/getAllUsers'

export const getAllUsers = async(req:Request,res: Response) =>{
    try{
         const getAllUsersUC = new GetAllUsersUC(new UserDB());
        const result = await getAllUsersUC.execute();
        res.status(200).send(result)
    }catch(err){
        res.status(400).send({
            message: err.message,
            ...err
        })
    }
}