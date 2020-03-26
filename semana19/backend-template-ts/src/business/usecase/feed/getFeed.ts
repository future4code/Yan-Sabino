import { FeedGateway } from "../../gateways/feedGateway";
import { PostType } from "../../entities/post";

export class GetFeedUC {
  constructor(private feedGateway: FeedGateway) {}

  private POSTS_PER_PAGE = 10;

  public async execute(input: GetFeedUCInput): Promise<GetFeedUCOutput[]> {
    
    const posts = await this.feedGateway.getFeedForUser(input.userId);

     

    return posts.map(post => {
      return {
        postId: post.getPostId(),
        picture: post.getPicture(),
        description: post.getDescription(),
        creationDate: post.getCreationDate(),
        postType: post.getPostType(),
        name: post.getName()
      };
    });
  }
}

export interface GetFeedUCInput {
  userId: string;
}

export interface GetFeedUCOutput {
  postId: string;
  picture: string;
  description: string;
  creationDate: Date;
  postType: PostType;
  name: string
}
