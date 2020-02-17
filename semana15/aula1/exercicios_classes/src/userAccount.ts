import {Transaction} from './transaction'

export class UserAccount{
    balance: number
    cpf: string
    name: string
    age: number
    transactions: Transaction[]

    constructor(cpf: string, name: string, age: number, transactions: Transaction[]){
        this.balance = 0
        this.cpf = cpf
        this.name = name
        this.age = age
        this.transactions = transactions
    }

    getBalance(): number {
        console.log(this.balance)
        return this.balance
        
    }

    addBalance(amount: number): void{
        this.balance += amount
        
    }
}