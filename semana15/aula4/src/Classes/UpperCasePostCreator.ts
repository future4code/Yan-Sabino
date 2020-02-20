import { PostCreator } from "../Interfaces/PostCreator";
import { ErrorPrinter } from "./ErrorPrinter";
import { Post } from "./post";
import {FileManager} from '../JSONFileManager'

export class UpperCasePostCreator implements PostCreator {
  public create(name: string, text: string) {
    if (!name || !text) {
      throw new ErrorPrinter("deu erro", new Date());
    }
    
    const post = new Post(name, text.toUpperCase(), new Date());
    
    this.savePost(post);
  }

  protected savePost(post: Post) {
    const fileName = "post.json";
    const fileManager = new FileManager(fileName);
    const data = fileManager.readFile();
    data.posts.push(post);
    fileManager.writeFile(data);
  }
}
