import express, { Request, Response } from "express";
import cors from "cors";
import { getUserByTypeEndpoint } from "./endpoints/getUserByType";
import { createUserEndpoint } from "./endpoints/createUser";
import { loginUserEndpoint } from "./endpoints/loginUser";
import { getAllStudentsEndpoint } from "./endpoints/getAllStudents";
import { changePasswordEndpoint } from "./endpoints/changePassword";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", getUserByTypeEndpoint);
app.post("/users/create", createUserEndpoint);
app.post("/users/changePassword", changePasswordEndpoint);
app.post("/login", loginUserEndpoint);

app.get("/users/students", getAllStudentsEndpoint);

export default app;
