"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostReaderImp_1 = require("./Classes/PostReaderImp");
const PostCreatorHandler_1 = require("./Classes/PostCreatorHandler");
const post1 = new PostCreatorHandler_1.PostCreatorHandler();
const reader = new PostReaderImp_1.PostReaderImp();
reader.readPosts();
post1.execute("Saone", "oi eu sou o Yan");
//# sourceMappingURL=index.js.map