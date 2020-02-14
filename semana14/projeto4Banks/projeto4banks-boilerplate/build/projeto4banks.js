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
const userName = process.argv[4];
const userCpf = Number(process.argv[5]);
const userBirthday = moment(process.argv[6], "DD/MM/YYYY");
const userBalance = Number(process.argv[7]);
const createAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    const readAccountsPromise = new Promise((resolve, reject) => {
        fs_1.readFile(jsonFileName, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data.toString());
        });
    });
    const jsonContent = yield readAccountsPromise;
    console.log(jsonContent);
    const accountsObject = JSON.parse(jsonContent);
    accountsObject.accountList.push({
        user: {
            name: userName,
            cpfNumber: userCpf,
            birthday: userBirthday.format("DD/MM/YYYY"),
        },
        balance: userBalance,
    });
    console.log(accountsObject);
    fs_1.writeFileSync(jsonFileName, JSON.stringify(accountsObject));
});
createAccounts()
    .then((accountsObject) => console.log(accountsObject.accountList))
    .catch(err => console.error(err));
//# sourceMappingURL=projeto4banks.js.map