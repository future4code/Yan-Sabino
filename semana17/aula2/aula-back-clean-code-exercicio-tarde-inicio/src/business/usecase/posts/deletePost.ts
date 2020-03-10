import { PostDB } from "../../../data/postDataBase";
import { NotFoundError } from "../../error/NotFoundError";

export class DeletePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: DeletePostUCInput): Promise<DeletePostUCOutPut> {
    const post = await this.db.getPost(input.id);

    if (!post) {
      throw new NotFoundError("Post not found");
    }

    await this.db.deletePost(input.id);

    return{
      message: "Post Deleted SuccessFully"
    }
  }
}

export interface DeletePostUCInput {
  id: string;
}

export interface DeletePostUCOutPut{
  message: string;
}
