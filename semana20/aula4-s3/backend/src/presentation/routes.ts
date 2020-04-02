import express, { Request, Response } from "express";
import fileUpload from "express-fileupload";
import { uploadFileEndPoint } from "./endpoints/uploadFile";

const app = express();
app.use(express.json()); // Linha mágica (middleware)
app.use(fileUpload());
app.post("/uploadFile", uploadFileEndPoint);
export default app;
