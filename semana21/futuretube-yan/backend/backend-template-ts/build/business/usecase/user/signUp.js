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
const uuid_1 = require("uuid");
const user_1 = require("../../entities/user");
class SignUpUC {
    constructor(db, authenticationGateway, cryptographyGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            // gerar um id,
            const id = this.generateUserId();
            //verificar inputs
            if (!input.name || input.name.length < 1) {
                throw new Error("Input name is missing!");
            }
            if (!input.email || input.email.length < 1) {
                throw new Error("Input email is missing!");
            }
            if (!input.birthDate || input.birthDate.length < 1) {
                throw new Error("Input birthDate is missing!");
            }
            if (!input.picture || input.picture.length < 1) {
                throw new Error("Input picture is missing!");
            }
            // criptopgrar a senha
            const pass = yield this.cryptographyGateway.encrypt(input.password);
            const invalidPassword = pass.length < 6;
            if (!pass || invalidPassword) {
                throw new Error("Password does not exist or is not valid");
            }
            // salvar o usuário no banco
            const user = new user_1.User(id, input.name, input.email, input.birthDate, pass, input.picture);
            yield this.db.signUp(user);
            //gerar token
            const token = this.authenticationGateway.generateToken({
                id: user.getId(),
            });
            return {
                token,
            };
        });
    }
    generateUserId() {
        return uuid_1.v4();
    }
}
exports.SignUpUC = SignUpUC;
