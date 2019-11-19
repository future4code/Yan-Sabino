// const pessoa = {
//     Nome: "Yan",
//     Idade: "24",
//     Email: "yan.sabino@hotmail.com"
// }

function aoClicarEmCadastrar(){
    console.log("Cliquei")
    const valorNome = document.getElementById("nome").value
    const valorIdade = document.getElementById("idade").value
    const valorEmail = document.getElementById("email").value
    const valorInscritos = document.getElementById("inscritos")
    valorInscritos.innerHTML += "<div><ul><li>" + "Nome: " + valorNome + "</li>" 
    + "<li>" + "Idade: " + valorIdade + "</li>" 
    + "<li>" + "E-mail: " + valorEmail + "</li>"

    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("email").value = ""

   
}