import { Mission } from "./mission";
import { Teacher } from "./teacher";
import { Student } from "./student";

export class MissionWeb extends Mission {
  constructor(public missionName: string, beginDate: Date, endDate: Date) {
    super(beginDate, endDate);
  }
}
