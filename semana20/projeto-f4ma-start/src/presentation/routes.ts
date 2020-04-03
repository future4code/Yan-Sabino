import express, { Request, Response } from "express";
import { createBandEndPoint } from "./endpoints/band/createBand";
import { getBandEndPoint } from "./endpoints/band/getBand";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/createBand", createBandEndPoint)
app.get("/band", getBandEndPoint)

export default app;
