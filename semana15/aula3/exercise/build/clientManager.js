"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClientsQuantity() {
        console.log("A quantidade de clientes é: ", this.clients.length);
    }
    printCellBills() {
        this.clients.forEach(client => {
            console.log(client.clientNumber +
                "-" +
                client.clientName +
                "-" +
                client.calculateBill());
        });
    }
    calculateAllIncome() {
        let total = 0;
        this.clients.forEach((eachClient) => {
            total += eachClient.calculateBill();
        });
        console.log(total);
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=clientManager.js.map