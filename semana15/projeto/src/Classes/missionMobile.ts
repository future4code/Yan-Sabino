import { Mission } from "./mission";


export class MissionMobile extends Mission {
  constructor(public missionNumber: string, beginDate: Date, endDate: Date) {
    super(beginDate, endDate);
  }
}
