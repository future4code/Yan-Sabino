function addTarefa(){
    const txt = document.getElementById("novaTarefa").value
    const seletor = document.getElementById("seletorDiaDaSemana").value
    const contentul = document.getElementById("content")
    const contentul1 = document.getElementById("content1")
    const contentul2 = document.getElementById("content2")
    const contentul3 = document.getElementById("content3")
    const contentul4 = document.getElementById("content4")
    const contentul5 = document.getElementById("content5")
    const contentul6 = document.getElementById("content6")

        if(txt === ""){
        alert("Por favor insira uma tarefa!")
        document.getElementById("novaTarefa").focus()
        return false
        }
        
        if(seletor === "segunda"){
            contentul.innerHTML += "<li id='elemento'> " + txt + " </li>"
            
        } else if(seletor === "terca"){
            contentul1.innerHTML += "<li id='elemento'> " + txt + " </li>"
            
        } else if(seletor === "quarta"){
            contentul2.innerHTML += "<li id='elemento'> " + txt + " </li>"
            
        } else if(seletor === "quinta"){
            contentul3.innerHTML += "<li id='elemento'> " + txt + " </li>"
            
        } else if(seletor === "sexta"){
            contentul4.innerHTML += "<li id='elemento'> " + txt + " </li>"
            
        } else if(seletor === "sabado"){
            contentul5.innerHTML += "<li id='elemento'> " + txt + " </li>"
            
        } else if(seletor === "domingo"){
            contentul6.innerHTML += "<li id='elemento'> " + txt + " </li>"
            
        }
}

function apagaForm(){
    document.getElementById('novaTarefa').value = ""
}

function limparTarefas(){
    const limpar = document.getElementById("content")
    const limpar1 = document.getElementById("content1")
    const limpar2 = document.getElementById("content2")
    const limpar3 = document.getElementById("content3")
    const limpar4= document.getElementById("content4")
    const limpar5 = document.getElementById("content5")
    const limpar6= document.getElementById("content6")
    limpar.innerHTML = ""
    limpar1.innerHTML = ""
    limpar2.innerHTML = ""
    limpar3.innerHTML = ""
    limpar4.innerHTML = ""
    limpar5.innerHTML = ""
    limpar6.innerHTML = ""
}