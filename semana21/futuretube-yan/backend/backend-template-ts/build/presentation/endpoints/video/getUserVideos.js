"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const videoDB_1 = require("../../../data/videoDB");
const getUserVideos_1 = require("../../../business/usecase/video/getUserVideos");
const jwtAuthorizer_1 = require("../../../services/jwtAuthorizer");
exports.getUserVideosEndPoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoDB = new videoDB_1.VideoDB();
        const jwtAuth = new jwtAuthorizer_1.JwtAuthorizer();
        const getUserVideoUC = new getUserVideos_1.GetUserVideosUC(videoDB, jwtAuth);
        // const input = {
        //   userId: req.headers ? req.headers.userId : "",
        //   token: req.headers.auth as string,
        // };
        const result = yield getUserVideoUC.execute({
            userId: req.headers.userId || "",
            token: req.headers.auth,
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});
