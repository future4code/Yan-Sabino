import {Dish} from './dish'
import {Dessert} from './dessert'
import {SaltyDish} from './saltydish'



const brigadeiro = new Dessert(5, 1, ["leite condensado"], 60, 10);
console.log("Preço da unidade: ", brigadeiro.getSlicePrice());
console.log("Lucro do Prigadeiro: ", brigadeiro.getProfit());

const bolo = new Dessert(60, 20, ["trigo", "ovo", "fermento", "açucar"], 100, 20);
console.log("Preço do pedaço: ", bolo.getSlicePrice());
console.log("Lucro do bolo: ", bolo.getProfit());


const feijoada = new SaltyDish(100, 20, ["feijão", "carne seca", "calabresa", "corinho"], 100);
console.log(feijoada)
console.log("Lucro da Feijoada", feijoada.getProfit());

const pizza = new SaltyDish(100, 20, ["trigo", "molho de tomate", "calabresa", "queijo", "cebola", "catupiry"], 100);
console.log(pizza)
console.log("Lucro da pizza: ", pizza.getProfit());