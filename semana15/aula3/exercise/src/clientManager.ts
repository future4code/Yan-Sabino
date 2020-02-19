import { Client } from "./client";
import { CommercialClient } from "./commertialClient";
import { IndustrialClient } from "./industrialClient";
import { ResidentialClient } from "./residentialClient";

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

  public printCellBills() {
    this.clients.forEach(client => {
      console.log(
        client.clientNumber +
          "-" +
          client.clientName +
          "-" +
          client.calculateBill()
      );
    });
  }

  public calculateAllIncome() {
    let total = 0;
    this.clients.forEach(eachClient => {
      total += eachClient.calculateBill();
    });
    console.log(total);
  }
}
