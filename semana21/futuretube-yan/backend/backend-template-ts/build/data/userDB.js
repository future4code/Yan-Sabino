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
const user_1 = require("../business/entities/user");
const baseDB_1 = require("./baseDB");
class UserDatabase extends baseDB_1.BaseDB {
    constructor() {
        super(...arguments);
        this.usersTable = "users_futuretube";
    }
    // alteração inputs da minha função
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection.raw(`
      INSERT INTO ${this.usersTable} (id, name, email, birth_date, password)
      VALUES(
        '${user.getId()}',
        '${user.getName()}',
        '${user.getEmail()}',
        '${user.getBirthDate()}',
        '${user.getPassword()}'
      )
    `);
            }
            catch (err) {
                throw err;
            }
        });
    }
    login(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE email = '${email}'
    `);
            if (!user[0]) {
                return undefined;
            }
            return new user_1.User(user[0].id, user[0].name, user[0].email, user[0].birth_date, user[0].password);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE email = '${email}'
    `);
            if (!result[0][0]) {
                return undefined;
            }
            return new user_1.User(result[0][0].id, result[0][0].name, result[0][0].email, result[0][0].birthDate, result[0][0].password);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT * FROM ${this.usersTable} WHERE id = '${id}'
    `);
            if (!result[0][0]) {
                return undefined;
            }
            return new user_1.User(result[0][0].id, result[0][0].name, result[0][0].email, result[0][0].birth_date, result[0][0].password);
        });
    }
    updatePassword(id, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
      UPDATE ${this.usersTable}
      SET password = '${newPassword}'
      WHERE id = '${id}'
    `);
        });
    }
}
exports.UserDatabase = UserDatabase;
