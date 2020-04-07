import express from "express";
import { signupEndpoint } from "./endpoints/signup";
import { getUserByEmail } from "./endpoints/getUserByEmail";
import { getAllUsers } from "./endpoints/getAllUsers"
import { editUsersEndPoint } from "./endpoints/editUser"
import { deleteUserEndPoint } from "./endpoints/deleteUser"

const app = express();
app.use(express.json());

app.post("/signup", signupEndpoint);

app.get("/user", getUserByEmail);

app.get("/user/all", getAllUsers);

app.post("/user/edit", editUsersEndPoint)

app.delete("/user/:id", deleteUserEndPoint)

export default app;
