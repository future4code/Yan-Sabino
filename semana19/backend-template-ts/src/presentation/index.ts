import express from "express";
import { signUpEndPoint } from "./endpoints/users/signUp";
import { loginEndPoint } from "./endpoints/users/login";
import { friendUserEndPoint } from "./endpoints/users/friendUser";
import { unfriendUserEndPoint } from "./endpoints/users/unfriendUser";
import { createPostEndpoint } from "./endpoints/posts/createPostEndPoint";
import { getFeedEndPoint } from "./endpoints/feed/getFeedEndPoint";
import { getFeedByTypeEndPoint } from "./endpoints/feed/getFeedByTypeEndPoint";

const app = express();
app.use(express.json());

//Users

app.post("/signup", signUpEndPoint);
app.post("/login", loginEndPoint);
app.post("/user/addfriend", friendUserEndPoint);
app.post("/user/unfriend", unfriendUserEndPoint);

//Posts

app.post("/createPost", createPostEndpoint);

//Feed

app.post("/feed", getFeedEndPoint);
app.post("/feed/:postType", getFeedByTypeEndPoint);

export default app;
