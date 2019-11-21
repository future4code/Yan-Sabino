/* Exercício 1

Um código de invertimentos que o usuário seleciona o tipo de investimento que ele quer e o valor que ele quer
aplicar. Então uma variavel é criada para saber o valor que ele terá depois do valor inicial ser aplicado.

A Seleção do tipo de investimento é feita por um switch case , onde dentro dele, tem as opções de poupança, 
renda fixa, CDBs e açoes. e cada uma com o coeficiente de rendimento correspondente. Caso não sejam escolhidos nenhum desses
tipos ... uma mensagem pagrão sera ativada informando que o tipo de investimento é incorreto. Depois do investimento
ter sido feito um valor é retornado  na variavel "valorAposInvestimento".

a atualização do novo montante é feita pela variavel novoMontante e segundoMontante onde são escolhidos novamente o valor
investido e o tipo de investimento. O valor mostrado pelo console.log é a multiplicação do valor investido com o 
coeficiente de rendimento de cada tipo de investimento.

    Exercício 2

Objetos são maneiras 
*/



//Exercício 3

function criaRetangulo(lado1,lado2){
    
    lado1 = document.getElementById("lado1").value
    lado2 = document.getElementById("lado2").value
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2*(parseInt(lado1) + parseInt(lado2)),
        area: lado1*lado2
    }

const inputs = document.getElementById("inputs")
inputs.innerHTML += "<p>" + "Largura: " + retangulo.largura + "</p>"
inputs.innerHTML += "<p>" + "Altura: " + retangulo.altura + "</p>"
inputs.innerHTML += "<p>" + "Perímetro: " + retangulo.perimetro + "</p>"
inputs.innerHTML += "<p>" + "Area: " + retangulo.area + "</p>"

}

//Exercício 4

const pessoa = {
    nome: "Yan",
    idade: 24,
    email: "yan.sabino@hotmail.com",
    endereco: "Piracicaba/SP"
}
console.log(pessoa)

function anonimizarPessoa() {
    const pessoaAnonima = {
    ...pessoa,
    nome: "Anonimo"
    }
  const pa = document.getElementById("pessoa")
  pa.innerHTML +="<p>" +"Nome: "+ pessoaAnonima.nome +" Idade: "+ pessoa.idade +" E-mail: "+ pessoa.email +" Endereço: "+ pessoa.endereco + "</p>"  
}

anonimizarPessoa(pessoa)
console.log(anonimizarPessoa)

//Exercício 5

const filme = {
    titulo: "Matrix",
    ano: 1999,
    diretor: "Lana Wachowski",
    atores: ["Keanu Reeves", "Carrie-Anne Moss"]
}
console.log(filme)
function frase(infoFilme){
    const frasefilme =  document.getElementById("filme")
    frasefilme.innerHTML += "<p> Venha assistir ao filme " + infoFilme.titulo + ", de " 
    + infoFilme.ano + ", dirigido por " + infoFilme.diretor + " e estrelado por " 
    + infoFilme.atores[0] + " e " + infoFilme.atores[1] + ".</p>"
}

frase(filme)

