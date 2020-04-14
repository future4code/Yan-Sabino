"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const video_1 = require("./video");
class VideoFeed extends video_1.Video {
    constructor(videoId, url, description, title, userId, name, picture) {
        super(videoId, url, description, title, userId);
        this.name = name;
        this.picture = picture;
    }
    getName() {
        return this.name;
    }
    getPicture() {
        return this.picture;
    }
}
exports.VideoFeed = VideoFeed;
