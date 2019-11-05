import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// confirm("Bem vindo ao jogo de Black Jack!")

// if(confirm("Quer iniciar uma rodada?")){
    
//     const cartasU =  [comprarCarta(), comprarCarta()] 
//     const cartasC =  [comprarCarta(), comprarCarta()] 
//     let cartaAdd = 0

//     let mensagem = confirm("Suas cartas são " + cartasU[0].texto + " e " + cartasU[1].texto + ". A carta revelada do computador é " + cartasC[0].texto + ". Deseja comprar mais uma carta?")

//     for(;mensagem;){
//         const novaMensagem = comprarCarta()
//         cartasU.push(novaMensagem), cartaAdd = 0
//         for (let cartasC of cartasU)
//             cartaAdd += cartasC.valor
//         if (cartaAdd < 21)   {
//           let novoTermo = ""
//           for(let cartasC of cartasU)
//               novoTermo += cartasC.texto + " "
//               mensagem = confirm("Suas cartas são " + novoTermo + ". A carta revelada do computador é " + cartasC[0].texto + ". Deseja comprar mais uma carta?")
//         } else{
//           mensagem = !1
//         }
//     }

// } 

    