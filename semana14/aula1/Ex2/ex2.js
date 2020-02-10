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
if(process.argv.length <= 3){
    console.log("Pelo menos 3 paramentros são esperados e recebi menos que isso")
}else{
    try {
        fs.appendFileSync(fileName,newTask,'utf8');
        console.log("Tarefa Inserida com sucesso")
    }catch(e){
        console.error(e)
    }
}
