"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("../JSONFileManager");
class PostReaderImp {
    readPosts() {
        const fileName = "post.json";
        const fileManager = new JSONFileManager_1.FileManager(fileName);
        console.log(fileManager.readFile());
    }
}
exports.PostReaderImp = PostReaderImp;
//# sourceMappingURL=PostReaderImp.js.map