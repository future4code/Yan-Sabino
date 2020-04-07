import { Request, Response } from "express";
import {
  GetUserByTypeUC,
  UserOrderType
} from "../../business/usecase/getUserByType";
import { UserDatabase } from "../../data/userDatabase";

export const getUserByTypeEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetUserByTypeUC(new UserDatabase());
    let orderType = UserOrderType.ASC;
    if (req.body.orderType === "DESC") {
      orderType = UserOrderType.DESC;
    }
    const result = await uc.execute({
      type: req.body.type,
      orderBy: req.body.orderBy,
      orderType,
      page: req.body.page
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      errorMessage: err.message
    });
  }
};
