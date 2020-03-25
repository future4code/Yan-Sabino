import { BaseDB } from "./baseDB";
import { PostGateway } from "../business/gateways/postGateway";
import { Post } from "../business/entities/post";

export class PostDB extends BaseDB implements PostGateway{
    private postTableName = "posts"

    public async createPost(post: Post): Promise<void>{
        try {
            await this.connection
            .insert({
                postId: post.getPostId(),
                picture: post.getPicture(),
                description: post.getDescription(), 
                creationDate: post.getCreationDate(),
                postType: post.getPostType(),
                userId: post.getUserId()
            }).into(this.postTableName)
        }catch(err){
            throw err
        }
    }
}