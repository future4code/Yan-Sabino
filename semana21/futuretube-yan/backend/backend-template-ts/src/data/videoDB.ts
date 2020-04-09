import { BaseDB } from "./baseDB";
import { VideoGateway } from "../business/gateways/videoGateway";
import { Video } from "../business/entities/video";

export class VideoDB extends BaseDB implements VideoGateway{
    private videoTableName = "videos_futuretube"

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
}