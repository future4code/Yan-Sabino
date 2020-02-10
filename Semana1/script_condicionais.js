/*
 Exercício 1

 O código em questão avalia se o numero colocado pelo usuario 
 é par ou não. Para testar isso ele pergunta se o resto no numero colocado tem um resto 0 quando é dividido por 2, se for ele mostra a mensagem "Passou no teste", se o resto não for 0 ele não passou no teste.

 Exercício 2

 a. O código acima serve para o preço da fruta que o usuario quer saber.
 b. A mensagem que aparece para a fruta maçã é: 
 "O preço da fruta maçã é R$ 2.25"
 c. O preço a ser pago nesse conjunto de frutas é R$ 24,55
 d. Caso o usuario quisesse comprar uma pera sem o break, o preço que ele pagaria seria R$ 5,00.

 Exercício 3

 Haverá um erro no programa pois o console.log deveria estar dentro de cada bloco, isto é, do if e do else.
 */



//Exercícios de escrita de código

//Exercício 1

// const num1 = Number(prompt("Digite o primeiro numero"))
// const num2 = Number(prompt("Digite o segundo numero"))
// const num3 = Number(prompt("Digite o terceiro numero"))

// if (num1 > num2 && num2 > num3){
//   console.log("Sequência de números em ordem decrescente está correta") 
//   //se os numeros forem todos iguais apararecerá a mensagem abaixo.

// }else if(num1 === num2 && num2 === num3){
//   console.log("Por favor, insira pelo menos 1 número diferente")
// }else if(num1 < num2 && num2 < num3){
//   console.log("Por favor, insira os numeros em ordem decrescente")
// }

//Exercício 2

// const osso = prompt("O animal tem osso? [s/n}]")
// const pelos = prompt("O animal tem pelos? [s/n}]")
// const conciencia = prompt("O animal tem conciencia? [s/n}]")
// const pena = prompt("O animal tem penas? [s/n}]")
// // const terrestre = prompt("O animal é terrestre? [s/n}]")
// // const peixe = prompt("O animal é um peixe? [s/n}]")
// // const anfibio = prompt("O animal é um anfibio? [s/n}]")

// switch(osso){
//   case "s":
//   console.log("Vertebrado")
//   break

//   case "n":
//   console.log("Invertebrado")
//   break

// }

// switch(pelos){
//   case "s":
//   console.log("Mamífero")
//   break

//   case "n":
//   console.log("Ave")
//   break
// }

// switch(conciencia){
//   case "s":
//   console.log("Humano")
//   break

//   case "n":
//   console.log("Mamífero não Humano")
//   break
// }

// switch(terrestre){
//   case "s":
//   console.log("Mamífero")
//   break

//   case "n":
//   console.log("Ave")
//   break
// }



// if(osso === "s"){
//   console.log("Vertebrado")
// } else if(osso === "n"){
//   console.log("Invertebrado")
// }

// if(pelos === "s"){
//   console.log("Mamífero")
//   } 
// if(conciencia === "s"){
//   console.log("Humano")
  
// }
//   else if(conciencia === "n"){
//     console.log("Mamífero não humando")
//   }

//   if(pelos === "n" && pena === "s"){
//   console.log("Ave")
// } else if(pena === "n"){
//   console.log("Terreste")
// }
// if(terrestre == "n") {
//   console.log("Peixe")
// }
// if(peixe === "n" && anfibio === "s"){
//   console.log("Anfíbio")
// } else{
//   console.log("Réptil")
// }

//Exercício 3

// const nome = prompt("Qual seu nome completo?")
// const tipo = prompt("Qual o tipo de jogo? [IN/DO]")
// const etapa = prompt("Qual a etapa do jogo?[SF/DT/FI")
// const categoria = prompt("Qual a categoria do ingresso?")
// const quantidade = Number(prompt("Qual a quantidade de ingressos"))

// console.log("---Dados da Compra---")
// console.log("Nome do Cliente: " + nome)

// switch(tipo){
//   case "IN":
//   console.log("Tipo do Jogo: Internacional")
//   break

//   case "DO":
//   console.log("Tipo do Jogo: Doméstico")
//   break
// }

// switch(etapa){
//   case "SF":
//   console.log("Etapa do Jogo: Semifinal")
//   break

//   case "DT":
//   console.log("Etapa do Jogo: Decisão do Terceiro Lugar")
//   break

//   case "FI":
//   console.log("Etapa do Jogo: Final")
//   break
// }

// switch(categoria){


//   case "1":
//     switch(etapa){
//       case "SF":
//         let precoUnitario = 1320;
//         const etapaDoJogo = "Semifinal";
//         break
//       case "DT":
//         precoUnitario = 660;
//         etapaDoJogo = "Decisão do terceiro Lugar";
//         break
//       case "FI":
//         precoUnitario = 1980;
//         etapaDoJogo = "Final";
//         break
//       default:
//         precoUnitario = 0;
//         break
            
//     }
//   console.log("Categoria: 1")
  
//   break

//   case "2":
//   switch(etapa){
//       case "SF":
//         let precoUnitario = 880;
//         const etapaDoJogo = "Semifinal";
//         break
//       case "DT":
//         precoUnitario = 440;
//         etapaDoJogo = "Decisão do terceiro Lugar";
//         break
//       case "FI":
//         precoUnitario = 1320;
//         etapaDoJogo = "Final";
//         break
//       default:
//         precoUnitario = 0;
//         break
//   console.log("Categoria: 2")
//   break
//   }

//   case "3":
//   switch(etapa){
//       case "SF":
//         let precoUnitario = 550;
//         const etapaDoJogo = "Semifinal";
//         break
//       case "DT":
//         precoUnitario = 330;
//         etapaDoJogo = "Decisão do terceiro Lugar";
//         break
//       case "FI":
//         precoUnitario = 888;
//         etapaDoJogo = "Final";
//         break
//       default:
//         precoUnitario = 0;
//         break
//   console.log("Categoria: 3")
//   break
//   }

//   case "4":
//   switch(etapa){
//       case "SF":
//         let precoUnitario = 220;
//         const etapaDoJogo = "Semifinal";
//         break
//       case "DT":
//         precoUnitario = 170;
//         etapaDoJogo = "Decisão do terceiro Lugar";
//         break
//       case "FI":
//         precoUnitario = 330;
//         etapaDoJogo = "Final";
//         break
//       default:
//         precoUnitario = 0;
//         break
//   console.log("Categoria: 4")
//   break
// }
// }
// console.log("Quantidade de ingressos: " + quantidade)

// console.log("---Valores---")

