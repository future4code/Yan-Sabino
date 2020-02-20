import { PostReader } from "../Interfaces/PostReader";
import { FileManager } from "../JSONFileManager";

export class PostReaderImp implements PostReader {
  public readPosts() {
    const fileName = "post.json";
    const fileManager = new FileManager(fileName);
    console.log(fileManager.readFile());
  }
}
