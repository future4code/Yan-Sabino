import { Client } from "./client";
import { Industry } from "./industry";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public clientName: string,
    public clientNumber: number,
    public consumedEnergy: number,
    name: string,
    cnpj: string,
    cep: string
  ) {
    super(name, cnpj, cep);
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.45;
  }
}
