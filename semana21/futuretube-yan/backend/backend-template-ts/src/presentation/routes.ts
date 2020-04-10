import express from "express";

import { signUpEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { changePasswordEndpoint } from "./endpoints/user/changePassword";
import { uploadVideoEndPoint } from "./endpoints/video/uploadVideo";
import { getUserVideosEndPoint } from "./endpoints/video/getUserVideos";
import { changeVideoInfosEndPoint } from "./endpoints/video/changeVideoInfos";

const app = express();
app.use(express.json());

app.post("/signup", signUpEndpoint);
app.post("/users/changePassword", changePasswordEndpoint);
app.post("/login", loginEndpoint);
app.post("/videos/upload", uploadVideoEndPoint);
app.get("/users/videos/", getUserVideosEndPoint);
app.post("/videos/changeInfos", changeVideoInfosEndPoint)

export default app;
