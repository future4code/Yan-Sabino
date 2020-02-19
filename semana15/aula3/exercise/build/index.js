"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residentialClient_1 = require("./residentialClient");
const commertialClient_1 = require("./commertialClient");
const clientYan = new residentialClient_1.ResidentialClient("Yan", 1, 500, "Yan", "12345678945", "13400100");
const clientDavid = new residentialClient_1.ResidentialClient("David", 2, 500, "David", "12345678944", "13400101");
console.log(clientYan);
console.log(clientDavid);
const casasBahia = new commertialClient_1.CommercialClient('Casas Bahia', 3, 1500, 'Casas Bahia', '23.232.232/0001-02', "13400-142");
const magazineLuiza = new commertialClient_1.CommercialClient('Magazine Luiza', 4, 1500, 'Magazine Luiza', '23.232.232/0001-03', "13400-143");
console.log(casasBahia);
console.log(magazineLuiza);
//# sourceMappingURL=index.js.map