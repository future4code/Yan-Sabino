"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Video {
    constructor(videoId, url, description, title, userId) {
        this.videoId = videoId;
        this.url = url;
        this.description = description;
        this.title = title;
        this.userId = userId;
    }
    getVideoId() {
        return this.videoId;
    }
    getUrl() {
        return this.url;
    }
    getDescription() {
        return this.description;
    }
    getTitle() {
        return this.title;
    }
    getUserId() {
        return this.userId;
    }
}
exports.Video = Video;
