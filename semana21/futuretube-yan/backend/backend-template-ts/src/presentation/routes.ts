import express from "express";
import { getUserByTypeEndpoint } from "./endpoints/getUserByType";
import { signUpEndpoint } from "./endpoints/signUp";
import { loginEndpoint } from "./endpoints/login";
import { getAllStudentsEndpoint } from "./endpoints/getAllStudents";
import { changePasswordEndpoint } from "./endpoints/changePassword";

const app = express();
app.use(express.json());

app.post("/users", getUserByTypeEndpoint);
app.post("/signup", signUpEndpoint);
app.post("/users/changePassword", changePasswordEndpoint);
app.post("/login", loginEndpoint);

app.get("/users/students", getAllStudentsEndpoint);

export default app;
