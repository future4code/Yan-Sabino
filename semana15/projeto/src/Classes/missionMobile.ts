import { Mission } from "./mission";
import { Teacher } from "./teacher";
import { Student } from "./student";

export class MissionMobile extends Mission {
  constructor(
    public missionNumber: number,
    beginDate: Date,
    endDate: Date,
    
  ) {
    super(beginDate, endDate);
  }
}
