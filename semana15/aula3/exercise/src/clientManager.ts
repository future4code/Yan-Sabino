import { Client } from "./client";

export class ClientManager {
  public clients: Client[];

  constructor() {
    this.clients = [];
  }

  public addClient(client: Client): void {
    this.clients.push(client);
  }

  public getClientsQuantity() {
    console.log("A quantidade de clientes é: ", this.clients.length);
  }
}
