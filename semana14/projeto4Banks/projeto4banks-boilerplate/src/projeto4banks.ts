import * as moment from "moment";
import { readFile, writeFileSync } from "fs";

moment.locale("pt-br");

const jsonFileName: string = "projeto4banks.json";
const userName: string = process.argv[4];
const userCpf: number = Number(process.argv[5])
const userBirthday: any = moment(process.argv[6], "DD/MM/YYYY")
// const userExpense: number[] = Number(process.argv[7])
// const userExpenseValue: number = Number(process.argv[8])
// const userExpenseDescription: string = process.argv[9]
// const userExpenseDate: any = moment(process.argv[10], "DD/MM/YYYY")
const userBalance: number = Number(process.argv[7])

type expense = {
  value: number;
  description: string;
  date: Date;
};

type account = {
  user: {
    name: string,
    cpfNumber: number,
    birthday: Date,
  },
//   expense: expense[],
  balance: number,
};

type accountFile = {
  accountList: account[];
};

const createAccounts = async () => {
  const readAccountsPromise: Promise<string> = new Promise(
    (resolve, reject) => {
      readFile(jsonFileName, (err: Error, data: Buffer) => {
        if (err) {
          reject(err);
          return;
        }
        // console.log(data)
        resolve(data.toString());
      });
    }
  );

  const jsonContent: string = await readAccountsPromise;
  console.log(jsonContent);
  const accountsObject: accountFile = JSON.parse(jsonContent);
  accountsObject.accountList.push({
    user: {
        name: userName,
        cpfNumber: userCpf,
        birthday: userBirthday.format("DD/MM/YYYY"),
      },
    // expense: userExpense,
    balance: userBalance,
  });
  console.log(accountsObject);
  writeFileSync(jsonFileName, JSON.stringify(accountsObject));
};

createAccounts()
  .then((accountsObject: any) => console.log(accountsObject.accountList))
  .catch(err => console.error(err));
