"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entities/user");
class GetAllStudentsUC {
    constructor(db) {
        this.db = db;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            // userId, type
            // type === TEACHERS
            if (user_1.User.mapStringsToUserType(input.type) !== user_1.UserType.TEACHERS) {
                throw new Error("Unauthorized");
            }
            const users = yield this.db.getAllStudents();
            // banco me dá tudo ai
            return {
                users: users.map(u => {
                    return {
                        id: u.getId(),
                        name: u.getName()
                    };
                })
            };
        });
    }
}
exports.GetAllStudentsUC = GetAllStudentsUC;
