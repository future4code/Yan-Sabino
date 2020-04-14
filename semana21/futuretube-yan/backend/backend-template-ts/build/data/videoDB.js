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
const baseDB_1 = require("./baseDB");
const video_1 = require("../business/entities/video");
const videoFeed_1 = require("../business/entities/videoFeed");
class VideoDB extends baseDB_1.BaseDB {
    constructor() {
        super(...arguments);
        this.videoTableName = "videos_futuretube";
        this.usersTable = "users_futuretube";
    }
    uploadVideo(video) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO ${this.videoTableName} (videoId, url, description, title, userId)
            VALUES(
                '${video.getVideoId()}',
                '${video.getUrl()}',
                '${video.getDescription()}',
                '${video.getTitle()}',
                '${video.getUserId()}'
            )
        `);
        });
    }
    getUserVideos(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.connection.raw(`
            SELECT ${this.videoTableName}.*, ${this.usersTable}.*
            FROM ${this.videoTableName}
            JOIN ${this.usersTable}
            ON ${this.videoTableName}.userId = ${this.usersTable}.id
            WHERE ${this.videoTableName}.userId = "${userId}";
        `);
            if (!response[0]) {
                return undefined;
            }
            return response[0].map((video) => {
                return new videoFeed_1.VideoFeed(video.videoId, video.url, video.description, video.title, video.userId, video.name, video.picture);
            });
        });
    }
    getVideoById(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT * FROM ${this.videoTableName}
      WHERE videoId = '${videoId}'
    `);
            if (!result[0][0]) {
                return undefined;
            }
            return new video_1.Video(result[0][0].videoId, result[0][0].url, result[0][0].description, result[0][0].title, result[0][0].userId);
        });
    }
    changeVideosInfos(videoId, newDescription, newTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
      UPDATE ${this.videoTableName}
      SET description = '${newDescription}', title = '${newTitle}'
      WHERE videoId = '${videoId}';
    `);
        });
    }
    deleteVideo(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
      DELETE FROM ${this.videoTableName}
      WHERE videoId = '${videoId}'
    `);
        });
    }
    getAllVideos(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.connection.raw(`
      SELECT ${this.videoTableName}.*, ${this.usersTable}.*
      FROM ${this.videoTableName}
      JOIN ${this.usersTable}
      ON ${this.videoTableName}.userId = ${this.usersTable}.id
      LIMIT ${limit} OFFSET ${offset};
    `);
            return response[0].map((video) => {
                return new videoFeed_1.VideoFeed(video.videoId, video.url, video.description, video.title, video.userId, video.name, video.picture);
            });
        });
    }
    getAllVideoInfos(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
    SELECT ${this.videoTableName}.*, ${this.usersTable}.name, ${this.usersTable}.picture 
    FROM ${this.videoTableName}
    JOIN ${this.usersTable}
    ON ${this.videoTableName}.userId = ${this.usersTable}.id
    WHERE videoId = '${videoId}'
    `);
            return new videoFeed_1.VideoFeed(result[0][0].videoId, result[0][0].url, result[0][0].description, result[0][0].title, result[0][0].userId, result[0][0].name, result[0][0].picture);
        });
    }
}
exports.VideoDB = VideoDB;
