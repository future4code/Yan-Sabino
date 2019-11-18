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
        console.log(contentul)
        if(seletor === "segunda"){
            contentul.innerHTML += "<li> " + txt + " </li>"
            // console.log(contentul.innerHTML)
        } else if(seletor === "terca"){
            contentul1.innerHTML += "<li> " + txt + " </li>"
            // console.log(contentul.innerHTML)
        } else if(seletor === "quarta"){
            contentul2.innerHTML += "<li> " + txt + " </li>"
            // console.log(contentul.innerHTML)
        } else if(seletor === "quinta"){
            contentul3.innerHTML += "<li> " + txt + " </li>"
            // console.log(contentul.innerHTML)
        } else if(seletor === "sexta"){
            contentul4.innerHTML += "<li> " + txt + " </li>"
            // console.log(contentul.innerHTML)
        } else if(seletor === "sabado"){
            contentul5.innerHTML += "<li> " + txt + " </li>"
            // console.log(contentul.innerHTML)
        } else if(seletor === "domingo"){
            contentul6.innerHTML += "<li> " + txt + " </li>"
            // console.log(contentul.innerHTML)
        }

        
}

function apagaForm(){
    document.getElementById('novaTarefa').value = ""
}
