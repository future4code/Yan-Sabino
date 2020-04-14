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
class GetUserVideosUC {
    constructor(videoGateway, authenticationGateway) {
        this.videoGateway = videoGateway;
        this.authenticationGateway = authenticationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield this.authenticationGateway.getUsersInfoFromToken(input.token);
            let videos;
            if (!userInfo) {
                throw new Error("User Not Found");
            }
            if (input.userId) {
                videos = yield this.videoGateway.getUserVideos(input.userId);
            }
            else if (!input.userId) {
                videos = yield this.videoGateway.getUserVideos(userInfo.id);
            }
            if (!videos) {
                throw new Error("Feed is empty");
            }
            return {
                videos: videos.map((video) => {
                    return {
                        videoId: video.getVideoId(),
                        url: video.getUrl(),
                        description: video.getDescription(),
                        title: video.getTitle(),
                        userId: video.getUserId(),
                    };
                }),
            };
        });
    }
}
exports.GetUserVideosUC = GetUserVideosUC;
