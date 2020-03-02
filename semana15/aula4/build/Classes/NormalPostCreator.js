"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./post");
const JSONFileManager_1 = require("../JSONFileManager");
const ErrorPrinter_1 = require("./ErrorPrinter");
class NormalPostCreator {
    create(name, text) {
        if (!name || !text) {
            throw new ErrorPrinter_1.ErrorPrinter("deu erro", new Date());
        }
        this.savePost(new post_1.Post(name, text, new Date()));
    }
    savePost(post) {
        const fileName = "post.json";
        const fileManager = new JSONFileManager_1.FileManager(fileName);
        const data = fileManager.readFile();
        data.posts.push(post);
        fileManager.writeFile(data);
    }
}
exports.NormalPostCreator = NormalPostCreator;
//# sourceMappingURL=NormalPostCreator.js.map