"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorPrinter_1 = require("./ErrorPrinter");
const post_1 = require("./post");
const JSONFileManager_1 = require("../JSONFileManager");
class UpperCasePostCreator {
    create(name, text) {
        if (!name || !text) {
            throw new ErrorPrinter_1.ErrorPrinter("deu erro", new Date());
        }
        const post = new post_1.Post(name, text.toUpperCase(), new Date());
        this.savePost(post);
    }
    savePost(post) {
        const fileName = "post.json";
        const fileManager = new JSONFileManager_1.FileManager(fileName);
        const data = fileManager.readFile();
        data.posts.push(post);
        fileManager.writeFile(data);
    }
}
exports.UpperCasePostCreator = UpperCasePostCreator;
//# sourceMappingURL=UpperCasePostCreator.js.map