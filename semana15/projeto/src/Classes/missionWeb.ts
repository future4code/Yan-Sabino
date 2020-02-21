import { Mission } from "./mission";

export class MissionWeb extends Mission {
  constructor(
    public missionName: string[],
    beginDate: Date,
    endDate: Date,
    teachersList: string[],
    studentsList: string[]
  ) {
    super(beginDate, endDate, teachersList, studentsList);
  }
}
