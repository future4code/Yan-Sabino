import { PostCreator } from "../Interfaces/PostCreator";
import { Post } from "./post";
import { FileManager } from "../JSONFileManager";
import { ErrorPrinter } from "./ErrorPrinter";

export class NormalPostCreator implements PostCreator {
  public create(name: string, text: string): void {
    if (!name || !text) {
      throw new ErrorPrinter("deu erro", new Date());
    }
    this.savePost(new Post(name, text, new Date()));
  }

  protected savePost(post: Post) {
    const fileName = "post.json";
    const fileManager = new FileManager(fileName);
    const data = fileManager.readFile();
    data.posts.push(post);
    fileManager.writeFile(data);
  }
}
