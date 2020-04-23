"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUp_1 = require("./endpoints/user/signUp");
const login_1 = require("./endpoints/user/login");
const changePassword_1 = require("./endpoints/user/changePassword");
const uploadVideo_1 = require("./endpoints/video/uploadVideo");
const getUserVideos_1 = require("./endpoints/video/getUserVideos");
const changeVideoInfos_1 = require("./endpoints/video/changeVideoInfos");
const deleteVideo_1 = require("./endpoints/video/deleteVideo");
const getAllVideos_1 = require("./endpoints/video/getAllVideos");
const getAllVideoInfos_1 = require("./endpoints/video/getAllVideoInfos");
const getUserById_1 = require("./endpoints/user/getUserById");
var cors = require("cors");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors());
app.post("/signup", signUp_1.signUpEndpoint);
app.post("/users/changePassword", changePassword_1.changePasswordEndpoint);
app.post("/login", login_1.loginEndpoint);
app.post("/videos/upload", uploadVideo_1.uploadVideoEndPoint);
app.get("/users/videos/", getUserVideos_1.getUserVideosEndPoint);
app.post("/videos/changeInfos", changeVideoInfos_1.changeVideoInfosEndPoint);
app.delete("/videos/delete/:videoId", deleteVideo_1.deleteVideoEndPoint);
app.get("/videos/", getAllVideos_1.getAllVideosEndPoint);
app.get("/videos/info", getAllVideoInfos_1.getAllVideoInfos);
app.get("/user", getUserById_1.getUserByIdEndPoint);
exports.default = app;
