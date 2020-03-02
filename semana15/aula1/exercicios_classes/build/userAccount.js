"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(cpf, name, age, transactions) {
        this.balance = 0;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }
    getBalance() {
        console.log(this.balance);
        return this.balance;
    }
    addBalance(amount) {
        this.balance += amount;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=userAccount.js.map