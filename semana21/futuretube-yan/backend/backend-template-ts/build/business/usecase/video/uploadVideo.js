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
const video_1 = require("../../entities/video");
const uuid_1 = require("uuid");
class UploadVideoUC {
    constructor(db) {
        this.db = db;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const videoId = this.generateVideoId();
            if (!input.url || input.url.length < 1) {
                throw new Error("Input url is missing!");
            }
            if (!input.description || input.description.length < 1) {
                throw new Error("Input description is missing!");
            }
            if (!input.title || input.title.length < 1) {
                throw new Error("Input title is missing!");
            }
            const video = new video_1.Video(videoId, input.url, input.description, input.title, input.userId);
            yield this.db.uploadVideo(video);
        });
    }
    generateVideoId() {
        return uuid_1.v4();
    }
}
exports.UploadVideoUC = UploadVideoUC;
