"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const userAccount_1 = require("./userAccount");
class JSONFileManager {
    writeObjectToFile(account) {
        fs.writeFileSync('account.json', JSON.stringify(account));
    }
    getObjectFromFile() {
        const fileName = JSON.parse(fs.readFileSync('account.json').toString());
        return new userAccount_1.UserAccount(fileName.balance, fileName.cpf, fileName.name, fileName.age);
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map