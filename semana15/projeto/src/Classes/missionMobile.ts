import { Mission } from "./mission";

export class MissionMobile extends Mission {
  constructor(
    public missionNumber: number[],
    beginDate: Date,
    endDate: Date,
    teachersList: string[],
    studentsList: string[]
  ) {
    super(beginDate, endDate, teachersList, studentsList);
  }

  
}
