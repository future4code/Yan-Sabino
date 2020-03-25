import express from "express";
import { signUpEndPoint } from "./endpoints/users/signUp";
import { loginEndPoint } from "./endpoints/users/login";
import { friendUserEndPoint } from "./endpoints/users/friendUser";
import { unfriendUserEndPoint } from "./endpoints/users/unfriendUser";

const app = express();
app.use(express.json());

//Users

app.post("/signup", signUpEndPoint);
app.post("/login", loginEndPoint);
app.post("/user/addfriend", friendUserEndPoint);
app.post("/user/unfriend", unfriendUserEndPoint);

export default app;
