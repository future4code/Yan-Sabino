
/**
 * Comece seu exercício aqui! :D
 *//**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 * a. false
 * b. false
 * c. true
 * d. false
 * e. Boolean
 */

/**
 * EXERCÍCIO 2
 * I. undefined
 * II. null
 * III. 11
 * IV. 3 e 4
 * V. 19 e 24
 * VI. 3
 * VII. 
 *
 * a. Array é um tipo de variavel que consegue guardar um ou mais valores
 *
 * O array é declarado dessa forma :  let array[a, b, c,...,n];
 *
 * b. o index inicial é o i[0]
 * c. Através do comando .lenght
 * 
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 1
 */

let fahrenheit = 77;
let kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
console.log("a. " + kelvin + " K");

let celsius = 80;

fahrenheit = (celsius * 9) / 5 + 32;
console.log("b. " + fahrenheit + " ºF");

celsius = 30;
fahrenheit = (celsius * 9) / 5 + 32;
console.log("c. " + fahrenheit + " ºF");

kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
console.log(kelvin + " K");

celsius = prompt("Quantos graus celsius?");
fahrenheit = (Number(celsius) * 9) / 5 + 32;
console.log("d. " + fahrenheit + " ºF");

kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
console.log(kelvin + " K");

// Exercício 2

let banda = prompt("Qual sua Banda Favorita?");
console.log("1. " + banda);

let cor = prompt("Qual sua cor Favorita?");
console.log("2. " + cor);

let comida = prompt("Qual sua Comida Favorita?");
console.log("3. " + comida);

let idade = prompt("Qual sua Idade?");
console.log("4. " + Number(idade) + " anos.");

let hobby = prompt("Qual seu hobby?");
console.log("5. " + hobby);


//Exercício 3

const salario = 998;

let kwh = salario / 5;
console.log("a. O valor de cada KW/h é de: " + kwh + " KW/h");

kwh = (280 * salario) / 5;
console.log("b. O valor do consumo de 280 KW/h nessa resisdência é de: " + kwh + " reais");

let desconto = kwh * 0.85;
console.log("c. O valor a ser pago com o desconto de 15% é de: " + desconto + " reais");

