import { BaseDB } from "./baseDB";
import { FeedGateway } from "../business/gateways/feedGateway";
import { Post } from "../business/entities/post";
import { PostFeed } from "../business/entities/postFeed";

export class FeedDB extends BaseDB implements FeedGateway{

    private userTableName = "users"
    private postTableName = "posts" 
    private friendTableName  = "friend_user"

    public async getFeedForUser(userId: string): Promise<PostFeed[]>{
        const response = await this.connection.raw(
            `SELECT ${this.postTableName}.* , ${this.userTableName}.name
            FROM ${this.friendTableName}
            JOIN ${this.postTableName} ON ${this.postTableName}.userId = ${this.friendTableName}.friend_id
            JOIN ${this.userTableName} ON ${this.friendTableName}.friend_id=${this.userTableName}.id
            WHERE user_id='${userId}'
            ORDER BY ${this.postTableName}.creationDate DESC;`
        )

        return response[0].map((post: any) => {
            return new PostFeed(
                post.postId,
                post.picture,
                post.description,
                post.creationDate,
                post.postType,
                post.userId,
                post.name
            )
        })
    }
}