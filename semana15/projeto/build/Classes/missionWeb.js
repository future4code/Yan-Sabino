"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class MissionWeb extends mission_1.Mission {
    constructor(missionName, beginDate, endDate) {
        super(beginDate, endDate);
        this.missionName = missionName;
    }
}
exports.MissionWeb = MissionWeb;
//# sourceMappingURL=missionWeb.js.map