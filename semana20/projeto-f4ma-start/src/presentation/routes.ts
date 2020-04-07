import express, { Request, Response } from "express";
import { createBandEndPoint } from "./endpoints/band/createBand";
import { getBandEndPoint } from "./endpoints/band/getBand";
import { createShowEndpoint } from "./endpoints/show/createShow";
import { getShowByDay } from "./endpoints/show/getShowByDay";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/createBand", createBandEndPoint)
app.get("/band", getBandEndPoint)
app.post("/createShow", createShowEndpoint)
app.get("/getShowByDay", getShowByDay)

export default app;
