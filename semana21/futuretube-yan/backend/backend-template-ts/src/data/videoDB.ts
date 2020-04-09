import { BaseDB } from "./baseDB";
import { VideoGateway } from "../business/gateways/videoGateway";
import { Video } from "../business/entities/video";
import { Stream } from "stream";
import { VideoFeed } from "../business/entities/videoFeed";

export class VideoDB extends BaseDB implements VideoGateway{
    private videoTableName = "videos_futuretube"
    private usersTable = "users_futuretube";

    public async uploadVideo(video: Video): Promise<void>{
        await this.connection.raw(`
            INSERT INTO ${this.videoTableName} (videoId, url, description, title, userId)
            VALUES(
                '${video.getVideoId()}',
                '${video.getUrl()}',
                '${video.getDescription()}',
                '${video.getTitle()}',
                '${video.getUserId()}'
            )
        `)
    }

    public async getUserVideos(userId: string): Promise <VideoFeed[] | undefined>{
        const response = await this.connection.raw(`
            SELECT ${this.videoTableName}.*, ${this.usersTable}.*
            FROM ${this.videoTableName}
            JOIN ${this.usersTable}
            ON ${this.videoTableName}.userId = ${this.usersTable}.id
            WHERE ${this.videoTableName}.userId = "${userId}";
        `)

        if(!response[0]){
            return undefined
        }

        return response[0].map((video: any) =>{
            return new VideoFeed(
                video.videoId,
                video.url,
                video.description,
                video.title,
                video.userId,
                video.name,
                video.picture
            )
        })




    }
}