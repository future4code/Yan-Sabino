const fs = require('fs')
const data = 'Comprar pao \nComprar Sabonete'
const newTask = `\n${process.argv[3]}`
const fileName = process.argv[2]

// try{
//     fs.writeFileSync(fileName, data);
//     console.log("Arquivo criado com sucesso")
// }catch(e){
//     console.error(e)
// }

try {
    fs.appendFileSync(fileName,newTask,'utf8');
    console.log("Tarefa Inserida com sucesso")
}catch(e){
    console.error(e)
}