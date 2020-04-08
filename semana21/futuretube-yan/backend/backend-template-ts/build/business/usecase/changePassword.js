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
class ChangePasswordUC {
    constructor(db, authenticationGateway, cryptographyGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.token) {
                throw new Error("Missing authorization token");
            }
            // [CHECK] INPUT: token, email, senha antiga, senha nova
            // [CHECK] token -> id do usuário
            const usersInfo = this.authenticationGateway.getUsersInfoFromToken(input.token);
            const id = usersInfo.id;
            // id do usuário -> banco pegar o usuário com esse id
            const user = yield this.db.getUserById(id);
            if (!user) {
                throw new Error("User not found");
            }
            // usuário -> 1. comparar o email enviado na requisicão com o email falso
            // if (user.getEmail() !== input.email) {
            //   throw new Error("Incorret information");
            // }
            // usuário -> 2. compara a senha antiga do usuário com a senha salva no banco
            const isPasswordCorrect = yield this.cryptographyGateway.compare(input.oldPassword, user.getPassword());
            if (!isPasswordCorrect) {
                throw new Error("Incorret information");
            }
            // banco -> autualiza a senha com a nova senha
            const pass = yield this.cryptographyGateway.encrypt(input.newPassword);
            yield this.db.updatePassword(user.getId(), pass);
            // [CHECK] devolver um novo token
            const token = this.authenticationGateway.generateToken({
                id: user.getId()
            });
            return {
                token
            };
        });
    }
}
exports.ChangePasswordUC = ChangePasswordUC;
