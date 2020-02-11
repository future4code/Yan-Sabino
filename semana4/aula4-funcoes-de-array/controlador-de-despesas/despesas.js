class despesa{
    constructor(valor, descricao, tipo){
        this.valor = valor
        this.descricao = descricao
        this.tipo = tipo
    }
}

const arrayDespesa = []

function salvar(){
    console.log("Teste Salvar")
    const valor = document.getElementById("valor").value
    console.log(valor)
    const descricao = document.getElementById('descricao').value
    const tipo = document.getElementById('tipoDespesa').value

    
    if(valor === "" || descricao === "" || tipo === "none"){
        alert("Por favor preencha os campos!")
        document.getElementById("valor").focus()
        return false
        }else if(valor !== "" || descricao !== "" || tipo !== "none"){
                    const dadosCadastrados = new despesa(valor, descricao, tipo)
                    console.log(dadosCadastrados)
                    arrayDespesa.push(dadosCadastrados)
                    console.log(arrayDespesa)
        }
    }        
        


function apagaForm(){
    document.getElementById('valor').value = ""
    document.getElementById('descricao').value = ""
    document.getElementById('valorMax').value = ""
    document.getElementById('valorMin').value = ""
}


function addDespesa(){
    const divAddDespesa = document.getElementById("valoresCadastrados")
    divAddDespesa.innerHTML = ""
    for(const post of arrayDespesa){
        divAddDespesa.innerHTML += criaDespesa(post)
    }
}

function criaDespesa(post){
    return "<ul><li>Descrição: " + post.descricao + "</li>" +
    "<li>Tipo: " + post.tipo + "</li>" + "<li>Valor: " + post.valor +
     "</li></ul>"
    }   