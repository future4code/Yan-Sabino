import express, { Request, Response } from "express";
import { createBandEndPoint } from "./endpoints/band/createBand";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/createBand", createBandEndPoint)

export default app;
