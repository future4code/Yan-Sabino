import { ResidentialClient } from "./residentialClient";
import { CommercialClient } from "./commertialClient";
import { IndustrialClient } from "./industrialClient";

//Instâncias de Clientes Residenciais
const clientYan = new ResidentialClient(
  "Yan",
  1,
  500,
  "Yan",
  "12345678945",
  "13400100"
);
const clientDavid = new ResidentialClient(
  "David",
  2,
  500,
  "David",
  "12345678944",
  "13400101"
);

console.log(clientYan);
console.log(clientDavid);

//Instâncias Comerciais

const casasBahia = new CommercialClient(
    'Casas Bahia',
    3,
    1500,
    'Casas Bahia',
    '23.232.232/0001-02',
    "13400-142"
)

const magazineLuiza = new CommercialClient(
    'Magazine Luiza',
    4,
    1500,
    'Magazine Luiza',
    '23.232.232/0001-03',
    "13400-143"
)

console.log(casasBahia)
console.log(magazineLuiza)

// Instâncias Industriais 

const honda = new IndustrialClient(
    'Honda',
    5,
    5000,
    'Honda',
    '23.232.232/0001-04',
    "13400-144"
)
const volkswagen = new IndustrialClient(
    'Volkswagen',
    6,
    5000,
    'Volkswagen',
    '23.232.232/0001-05',
    "13400-145"
)

console.log(honda)
console.log(volkswagen)