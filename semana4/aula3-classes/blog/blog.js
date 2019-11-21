class postagem{
    constructor(titulo, autor, conteudo){
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

function onKeyDown(ev) {
    if (ev.key === "Enter") {
        criarPost()
    }
}

const arrayDePost = []

function criarPost(){
console.log("clique em mim")
const titulo = document.getElementById("titulo").value
const autor = document.getElementById("autor").value
const conteudo = document.getElementById("texto").value

const post1 = new postagem(titulo, autor, conteudo)
console.log(post1) 
arrayDePost.push(post1)
console.log(arrayDePost)
document.getElementById('titulo').value = ""
document.getElementById('autor').value = ""
document.getElementById('texto').value = ""
 

}

function addPost(){
    console.log("add")
     const divDePost = document.getElementById("post")
     divDePost.innerHTML = ""
     for(const txt of arrayDePost){
    divDePost.innerHTML += criaPost(txt)
     }
}

function criaPost(){
    return "<h1>Título:" + arrayDePost.indexOf(titulo.value) +  "</h1>" +
    "<p>Autor:" + arrayDePost.indexOf(autor) + "</p>" + "<p>Conteúdo: " + arrayDePost.indexOf(titulo) +
    "</p>"
}



