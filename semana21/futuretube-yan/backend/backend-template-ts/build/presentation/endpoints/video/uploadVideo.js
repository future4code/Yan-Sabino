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
const uploadVideo_1 = require("../../../business/usecase/video/uploadVideo");
const videoDB_1 = require("../../../data/videoDB");
const jwtAuthorizer_1 = require("../../../services/jwtAuthorizer");
exports.uploadVideoEndPoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uc = new uploadVideo_1.UploadVideoUC(new videoDB_1.VideoDB());
        const jwtAuth = new jwtAuthorizer_1.JwtAuthorizer();
        const auth = req.headers.Authorization || req.headers.authorization;
        if (!auth) {
            throw new Error("Token not found");
        }
        const userId = jwtAuth.getUsersInfoFromToken(auth);
        const input = {
            url: req.body.url,
            description: req.body.description,
            title: req.body.title,
            userId: userId.id,
        };
        yield uc.execute(input);
        res.status(200).send({ message: "Video Uploaded" });
    }
    catch (err) {
        res.status(400).send({ message: err.message });
    }
});
