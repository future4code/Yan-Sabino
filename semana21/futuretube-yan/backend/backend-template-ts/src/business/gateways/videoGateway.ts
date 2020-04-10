import { Video } from "../entities/video";
import { VideoFeed } from "../entities/videoFeed";

export interface VideoGateway {
  uploadVideo(video: Video): Promise<void>;
  getUserVideos(userId: string): Promise<VideoFeed[] | undefined>;
  getVideoById(videoId: string): Promise<Video | undefined>;
  changeVideosInfos(videoId: string ,newDescription: string, newTitle: string): Promise<void>;
  deleteVideo(videoId: string): Promise<void>;
}
