import { User } from "../Interfaces/User";

export class Teacher implements User {
  constructor(
    public name: string,
    public email: string,
    public birthday: Date,
    public specialty: string
  ) {}
}
