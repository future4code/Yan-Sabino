import { User } from "../Interfaces/User";

export class Teacher implements User {
  constructor(
    public name: string,
    public email: string,
    public birthday: Date,
    public specialty: Specialty
  ) {}
}

enum Specialty  {
 HTML = "HTML",
 CSS = "CSS",
 JS = "JS",
 REACT = "REACT",
 REDUX = "REDUX",
 BACK = "BACK",
 OOP = "OOP"
}