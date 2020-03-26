import { Post, PostType } from "../entities/post";
import { PostFeed } from "../entities/postFeed";

export interface FeedGateway {
    getFeedForUser(userId: string): Promise<PostFeed[]>
    getFeedByType(type: PostType): Promise<PostFeed[]>
}