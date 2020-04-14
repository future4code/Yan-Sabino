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
class ChangeVideosInfosUC {
    constructor(db, authenticationGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield this.authenticationGateway.getUsersInfoFromToken(input.token);
            if (!userInfo) {
                throw new Error("User Not Found");
            }
            if (!input.newDescription || !input.newTitle) {
                throw new Error("You must fill in at least one field");
            }
            const video = yield this.db.getVideoById(input.videoId);
            if (!video) {
                throw new Error("Video not found");
            }
            yield this.db.changeVideosInfos(video.getVideoId(), input.newDescription, input.newTitle);
        });
    }
}
exports.ChangeVideosInfosUC = ChangeVideosInfosUC;
