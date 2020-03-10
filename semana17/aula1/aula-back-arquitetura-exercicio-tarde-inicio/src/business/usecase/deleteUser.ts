import {UserDB} from '../../data/userDataBase'

export class DeleteUserUC{
    constructor(private userDB: UserDB){}

    public async execute(input: DeleteUserByIdUCInput): Promise<void>{
        const user = await this.userDB.deleteUser(input.id)

        if(!user){
            throw new Error("user not found")
        }
    }
}

export interface DeleteUserByIdUCInput {
    id: string;
  }