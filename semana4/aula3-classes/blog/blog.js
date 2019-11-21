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
// const postagem = document.getElementById("post")
const post1 = new postagem(titulo, autor, conteudo)
console.log(post1) 
arrayDePost.push(post1)
console.log(arrayDePost)
document.getElementById('titulo').value = ""
document.getElementById('autor').value = ""
document.getElementById('texto').value = ""
// post1.innerHTML += "<h1>Título:" + post1.titulo +  "</h1>" +
//     "<p>Autor:" + post1.autor + "</p>" + "<p>Conteúdo: " + post1.conteudo +
//     "</p>" 

}







