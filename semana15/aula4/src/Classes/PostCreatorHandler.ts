import { UpperCasePostCreator } from "./UpperCasePostCreator";
import { LowerCasePostCreator } from "./LowerCasePostCreator";
import { NormalPostCreator } from "./NormalPostCreator";

export class PostCreatorHandler {
  public execute(name: string, text: string) {
    if (text.indexOf("&") !== -1) {
      const postCreator = new UpperCasePostCreator();
      postCreator.create(name, text);
    } else if (text.indexOf("%") !== -1) {
      const postCreator = new LowerCasePostCreator();
      postCreator.create(name, text);
    } else {
      const postCreator = new NormalPostCreator();
      postCreator.create(name, text);
    }
  }
}
