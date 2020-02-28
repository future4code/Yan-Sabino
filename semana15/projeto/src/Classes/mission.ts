import { Student } from "./student";
import { Teacher } from "./teacher";

export abstract class Mission {
  constructor(protected beginDate: Date, protected endDate: Date) {}
  protected teachersList: Teacher[] = [];
  protected studentsList: Student[] = [];
}
