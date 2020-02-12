import { resolve } from "dns";
import { readdir, readFile } from "fs";

const diretoryPath = "../../textos";

const readDirPromise = new Promise<string[]>((resolve, reject) => {
  readdir(diretoryPath, (err: Error, files: string[]) => {
    if (err) {
      reject(err);
    }
    resolve(files);
  });
});

const init = async () => {
  try {
    const fileList: string[] = await readDirPromise;
    for (let i: number = 0; i < fileList.length; i++) {
      let file: string = "";
      readFile(
        `${diretoryPath}/${fileList[i]}`,
        (err: Error, files: Buffer) => {
          if (err) {
            console.error(err);
          } else {
            file = files.toString();
            console.log(file);
          }
        }
      );
    }
  } catch (error) {
    console.error("Promise Failed", error);
  }
};
init();

// fs.readdir(diretoryPath,function(err: Error,files: Buffer){
//     if(err){
//         console.log("Erro em pegar as infos do diretório")
//     }else{
//         files.forEach(function(file){
//             console.log(file)
//         })
//     }
// })

// const fileName : string[] = ['1.txt', '2.txt', '3.txt', '4.txt', '5.txt']

// const firstPromise = new Promise((resolve, reject)) => {

//     if(err){
//         reject(err)
//         return
//     }
//     console.log()

// }
// const fileContent: string[] = data.toString()
// console.log("arquivo lido com sucesso", fileContent)
// readFile(fileName: , handleFileRead)
