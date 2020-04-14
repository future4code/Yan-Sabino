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
const getAllVideoInfos_1 = require("../../../business/usecase/video/getAllVideoInfos");
exports.getAllVideoInfos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoDB = new videoDB_1.VideoDB();
        const uc = new getAllVideoInfos_1.GetAllVideoInfosUC(videoDB);
        const result = yield uc.execute({
            videoId: req.query.videoId
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.errCode || 404).send({
            message: err.message,
        });
    }
});
