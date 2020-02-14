"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const jsonFileName = "projeto4banks.json";
const userName = process.argv[4];
const userCpf = Number(process.argv[5]);
const userBirthday = moment(process.argv[6], "DD/MM/YYYY HH:mm");
const userBalance = Number(process.argv[7]);
//# sourceMappingURL=projeto4banks.js.map