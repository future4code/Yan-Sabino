import express from "express";
import { signUpEndPoint } from "./endpoints/users/signUp";

const app = express();
app.use(express.json());

//Users

app.post("/signup", signUpEndPoint);

export default app;
