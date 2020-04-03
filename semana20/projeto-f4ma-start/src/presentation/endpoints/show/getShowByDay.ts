import { Request, Response } from "express";
import { GetShowsByDayUC } from "../../../business/usecase/show/getShowByDay";
import { ShowDatabase } from "../../../data/showDatabase";

export const getShowByDay = async (req:Request, res: Response) =>{
    try {
        const uc = new GetShowsByDayUC(new ShowDatabase())
        const result = await uc.execute({
            week_day: req.query.week_day
        })
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}