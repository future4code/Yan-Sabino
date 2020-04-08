"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUp_1 = require("./endpoints/signUp");
const login_1 = require("./endpoints/login");
const changePassword_1 = require("./endpoints/changePassword");
const app = express_1.default();
app.use(express_1.default.json());
app.post("/signup", signUp_1.signUpEndpoint);
app.post("/users/changePassword", changePassword_1.changePasswordEndpoint);
app.post("/login", login_1.loginEndpoint);
exports.default = app;
