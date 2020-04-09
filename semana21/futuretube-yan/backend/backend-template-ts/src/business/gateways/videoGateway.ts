import { Video } from "../entities/video";
import { VideoFeed } from "../entities/videoFeed";

export interface VideoGateway {
  uploadVideo(video: Video): Promise<void>;
  getUserVideos(userId: string): Promise<VideoFeed[] | undefined>;
}
