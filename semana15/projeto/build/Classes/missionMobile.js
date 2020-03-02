"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class MissionMobile extends mission_1.Mission {
    constructor(missionNumber, beginDate, endDate) {
        super(beginDate, endDate);
        this.missionNumber = missionNumber;
    }
}
exports.MissionMobile = MissionMobile;
//# sourceMappingURL=missionMobile.js.map