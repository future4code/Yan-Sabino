import * as moment from "moment";
import { readFile, writeFileSync } from "fs";

moment.locale("pt-br");

const jsonFileName: string = "projeto4banks.json";
const accountActions: string = process.argv[4];
const userName: string = process.argv[5];
const userCpf: number = Number(process.argv[6]);
const userBirthday: any = moment(process.argv[7], "DD/MM/YYYY");
const userExpense: number = Number(process.argv[8]);
// const userExpenseValue: number = Number(process.argv[8])
// const userExpenseDescription: string = process.argv[9]
// const userExpenseDate: any = moment(process.argv[10], "DD/MM/YYYY")
const userBalance: number = Number(process.argv[9]);

type expense = {
  value: number;
  description: string;
  date: Date;
};

type account = {
  user: {
    name: string;
    cpfNumber: number;
    birthday: Date;
  };
  expenses: expense[];
  balance: number;
};

type accountFile = {
  accountList: account[];
};

const readAccountsPromise: Promise<string> = new Promise((resolve, reject) => {
  readFile(jsonFileName, (err: Error, data: Buffer) => {
    if (err) {
      reject(err);
      return;
    }
    
    resolve(data.toString());
  });
});

const createAccounts = async () => {
  const jsonContent: string = await readAccountsPromise;
  console.log(jsonContent);
  const accountsObject: accountFile = JSON.parse(jsonContent);
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
  writeFileSync(jsonFileName, JSON.stringify(accountsObject));
};

const getBalance = async () => {
  const jsonContent: string = await readAccountsPromise;
  const accountsObject: accountFile = JSON.parse(jsonContent);
  const currentAccount = accountsObject.accountList.find((account: account) =>
        account.user.name === process.argv[5] &&
        account.user.cpfNumber === Number(process.argv[6])
    )
  console.log("O seu saldo é: ", currentAccount.balance);
};

switch (accountActions) {
  case "criar-conta":
    createAccounts()
      .then((accountsObject: any) => console.log(accountsObject.accountList))
      .catch(err => console.error(err));
    break;

  case "pegar-saldo":
    getBalance();
    break;

  default:
    console.log("comando invalido");
}
