import { Request, Response } from "express";
import { GetBandUC } from "../../../business/usecase/band/getBand";
import { BandDatabase } from "../../../data/bandDatabase";

export const getBandEndPoint = async (req: Request, res: Response) => {
  try {
    const getBandUC = new GetBandUC(new BandDatabase());
    const result = await getBandUC.execute({
      id: req.query.id,
      name: req.query.name,
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(err.errCode || 404).send({
      message: err.message,
    });
  }
};
