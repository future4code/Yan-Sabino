import * as fs from 'fs'
import {UserAccount} from './userAccount'

export class JSONFileManager{
    writeObjectToFile(account: UserAccount){
        fs.writeFileSync('account.json', JSON.stringify(account))
    }

    getObjectFromFile(): UserAccount {
        const fileName = JSON.parse(fs.readFileSync('account.json').toString())
        return new UserAccount(fileName.balance, fileName.cpf, fileName.name, fileName.age)
    }
}