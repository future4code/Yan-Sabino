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
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=clientManager.js.map