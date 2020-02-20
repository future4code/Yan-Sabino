"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UpperCasePostCreator_1 = require("./UpperCasePostCreator");
const LowerCasePostCreator_1 = require("./LowerCasePostCreator");
const NormalPostCreator_1 = require("./NormalPostCreator");
class PostCreatorHandler {
    execute(name, text) {
        if (text.indexOf("&") !== -1) {
            const postCreator = new UpperCasePostCreator_1.UpperCasePostCreator();
            postCreator.create(name, text);
        }
        else if (text.indexOf("%") !== -1) {
            const postCreator = new LowerCasePostCreator_1.LowerCasePostCreator();
            postCreator.create(name, text);
        }
        else {
            const postCreator = new NormalPostCreator_1.NormalPostCreator();
            postCreator.create(name, text);
        }
    }
}
exports.PostCreatorHandler = PostCreatorHandler;
//# sourceMappingURL=PostCreatorHandler.js.map