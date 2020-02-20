import { Post } from "./Classes/post";
import { PostReaderImp } from "./Classes/PostReaderImp";
import { PostCreatorHandler } from "./Classes/PostCreatorHandler";

const post1 = new PostCreatorHandler();
const reader = new PostReaderImp();
reader.readPosts();
post1.execute("Saone", "oi eu sou o Yan");
