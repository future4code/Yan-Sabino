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
