function apagaForm(){
    document.getElementById('valor').value = ""
    document.getElementById('descricao').value = ""
    document.getElementById('valorMax').value = ""
    document.getElementById('valorMin').value = ""
}

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
    const valor = document.getElementById('valor').value
    const descricao = document.getElementById('descricao').value
    const tipo = document.getElementById('tipoDespesa').value

    const dadosCadastrados = new despesa(valor, descricao, tipo)
    console.log(dadosCadastrados)
    arrayDespesa.push(dadosCadastrados)
    console.log(arrayDespesa)
}