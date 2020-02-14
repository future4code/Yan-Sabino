import * as moment from "moment";
import { readFile, writeFileSync } from "fs";
moment.locale("pt-br");

const jsonFileName: string = "projeto4banks.json"
const userName: string = process.argv[4]
const userCpf: number = Number(process.argv[5])
const userBirthday: any = moment(process.argv[6], "DD/MM/YYYY HH:mm")
const userBalance: number = Number(process.argv[7])
// const userExtract: number[] = Number(process.argv[8])


type account = {
    name: string;
    cpfNumber: number;
    birthday: Date;
    balance: number;
    extract: number[]
}

type accountFile = {
    accountList: account[]
}