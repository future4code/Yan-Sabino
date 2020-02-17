import {UserAccount} from './userAccount'
import {JSONFileManager} from './JSONFileManager'



class Bank{
    private userAccounts: UserAccount[];
    private fileManager : JSONFileManager

    constructor(fileName: string){
       this.fileManager
    }

    public createAccount(name: string, cpf: string, age: number): void {
        if(age<18){
           console.log('Para criar a conta é necessario ter mais de 18 anos') 
        }else{
            
        }
        
    }
}