import { UploadedFile } from "express-fileupload";
import { FileGateway } from "../gateways/fileGateway";

export class UploadedFileUC {
  constructor(private fileGateway: FileGateway) {}
  public async execute(input: UploadedFileUCInput): Promise<string> {
    const file = await this.fileGateway.uploadFile(
      input.file.name,
      input.file.data
    );
    return `
            <p> Sucesso! Link <a href="${file.getLink()}">Aqui</a></p>
            <img src="${file.getLink()}" width="50%">
    `;
  }
}

export interface UploadedFileUCInput {
  file: UploadedFile;
}
