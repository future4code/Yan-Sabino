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
class LoginUserUC {
    constructor(db, authenticationGateway, cryptographyGateway) {
        this.db = db;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            // email, e a senha
            // pegar as infos do usuário a partir do email dele => FUNCAO NO BANCO
            const user = yield this.db.getUserByEmail(input.email);
            if (!user) {
                throw new Error("User not found");
            }
            // compara a senha salva com a senha enviada
            const passwordCompare = yield this.cryptographyGateway.compare(input.password, user.getPassword());
            if (!passwordCompare) {
                throw new Error("Wrong Password or Email");
            }
            // Se estiver compatível, geramos o token e o usuário está logado
            const token = this.authenticationGateway.generateToken({
                id: user.getId()
            });
            return {
                token
            };
        });
    }
}
exports.LoginUserUC = LoginUserUC;
