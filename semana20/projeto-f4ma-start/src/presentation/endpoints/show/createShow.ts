import { Request, Response } from "express";
import { CreateShowUC } from "../../../business/usecase/show/createShow";
import { ShowDatabase } from "../../../data/showDatabase";

export const createShowEndpoint = async (req: Request, res: Response) => {
    try{
        const createShowUC = new CreateShowUC(new ShowDatabase());
        const result = await createShowUC.execute({
            weekDate: req.body.week_day,
            startTime: req.body.start_time,
            endTime: req.body.end_time,
            bandId: req.body.band_id
        })
        res.status(200).send({
            show: result
        })
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}