import express from "express";

import { signUpEndpoint } from "./endpoints/signUp";
import { loginEndpoint } from "./endpoints/login";
import { changePasswordEndpoint } from "./endpoints/changePassword";

const app = express();
app.use(express.json());

app.post("/signup", signUpEndpoint);
app.post("/users/changePassword", changePasswordEndpoint);
app.post("/login", loginEndpoint);

export default app;