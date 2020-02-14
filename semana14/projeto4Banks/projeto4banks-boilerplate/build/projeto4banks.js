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
const moment = require("moment");
const fs_1 = require("fs");
moment.locale("pt-br");
const jsonFileName = "projeto4banks.json";
const accountActions = process.argv[4];
const userName = process.argv[5];
const userCpf = Number(process.argv[6]);
const userBirthday = moment(process.argv[7], "DD/MM/YYYY");
const userExpense = Number(process.argv[8]);
const userBalance = Number(process.argv[9]);
const readAccountsPromise = new Promise((resolve, reject) => {
    fs_1.readFile(jsonFileName, (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data.toString());
    });
});
const createAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    const jsonContent = yield readAccountsPromise;
    console.log(jsonContent);
    const accountsObject = JSON.parse(jsonContent);
    accountsObject.accountList.push({
        user: {
            name: userName,
            cpfNumber: userCpf,
            birthday: userBirthday.format("DD/MM/YYYY")
        },
        expenses: [],
        balance: 0
    });
    console.log(accountsObject);
    fs_1.writeFileSync(jsonFileName, JSON.stringify(accountsObject));
});
const getBalance = () => __awaiter(void 0, void 0, void 0, function* () {
    const jsonContent = yield readAccountsPromise;
    const accountsObject = JSON.parse(jsonContent);
    console.log(accountsObject.accountList.find((account) => account.user.name === process.argv[5] && account.user.cpfNumber === Number(process.argv[6])).balance);
});
switch (accountActions) {
    case "criar-conta":
        createAccounts()
            .then((accountsObject) => console.log(accountsObject.accountList))
            .catch(err => console.error(err));
        break;
    case "pegar-saldo":
        getBalance();
        break;
    default:
        console.log("comando invalido");
}
//# sourceMappingURL=projeto4banks.js.map