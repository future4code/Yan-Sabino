/**
 * Exercicio de interpretação
 * 
 * Exercicio 1. 
 * 
 * O exercicio está realizando a soma de 0 a 11. E o resultado 
 * impresso no console é 55.
 * 
 * Exercício 2.
 * 
 * a. O comando .push adiciona um novo index no array.
 * b. o valor impresso no console são os numeros do array  multiplos de 5 : [10, 15, 20, 25,30].
 * c. para a variavel numero = 3 seriam impressos multiplos de 3 :
 * [12, 15, 18 , 27 , 30] , e para a variavel numero = 4 seriam impressos multiplos de 4: [12, 20]
 * 
 * Exercicio 3.
 * 
 * Se o usuario digitar 4 o console mostrará o seguinte resultado: 
 *  0
    00
    000
    0000

    A cada numero que o usuario inputa ele aumentará uma linha e adcionará um 0 ao lado.

 * 
 */
//Exercicios de escrita de codigo

//Exercício 4
//a.
// let arrayOriginal = [10, 30, 15, 50, 20]
// let maior = arrayOriginal[0]
// let menor = arrayOriginal[0]
// let arrayDivisao = []
// let arrayImpar = []



// for (let i = 0; i < arrayOriginal.length; i++) {
//   const elemento = arrayOriginal[i]
//   if (elemento > maior) {
//     maior = elemento
//   }
//   if (elemento < menor) {
//     menor = elemento
//   }
// }
// console.log(maior)
// console.log(menor)

// //b.
// let arrayOri = [10, 30, 15, 50, 20]
// for (i = 0; i < arrayOri.length; i++) {
//   let elemento = arrayOri[i]
//       elemento /= 10
//       arrayDivisao.push(elemento)
// }
// console.log(arrayDivisao)

// //c.
// for (i = 0; i < arrayOriginal.length; i++) {
//   const elemento = arrayOriginal[i]

//     if (elemento % 2 === 1) {
//       arrayImpar.push(elemento)
//   }

// }

// console.log(arrayImpar)

// //d.
// let arrayStrings = []
// for (let i = 0; i < arrayOriginal.length; i++) {
//   let elemento = arrayOriginal[i]

//   let texto = "O elemento do index " + elemento + " é " + i

//   arrayStrings.push(texto)

// }
// console.log(arrayStrings)

//Exercício 5 

// let numeroPensado = Number(prompt("Insira o numero que você pensou"))
// let numeroInserido = Number(prompt("Adivinhe o número:"))
// alert ("Vamos Jogar!")
// let i = 0
//   while(i<10){
    
//     if(numeroInserido > numeroPensado){
//       alert("O número chutado foi:" + numeroInserido)
//       alert("errrrrrrrrrrou o numero é menor")
//     }
//     i++
//   }
//   while(i<10) { 
//      if(numeroInserido < numeroPensado){
//       alert("O número chutado foi:" + numeroInserido)
//       alert("errrrrrrrrrrou o numero é maior")
//     }
//     i++
//   }
//   while(i<10) { 
//     if(numeroInserido === numeroPensado) {
//       alert("O número chutado foi:" + numeroInserido)
//       alert("Acertou!!")
//     }
//     i++
//   }