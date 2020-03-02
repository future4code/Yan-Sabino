"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missionWeb_1 = require("./Classes/missionWeb");
const FileManager_1 = require("./Classes/FileManager");
const missionMobile_1 = require("./Classes/missionMobile");
const reader = new FileManager_1.FileManager("mission.json");
const missions = reader.readFile();
const missaoWeb = new missionWeb_1.MissionWeb("Bouman", new Date(), new Date());
const missaoMobile = new missionMobile_1.MissionMobile("turma 1", new Date(), new Date());
missions.push(missaoWeb, missaoMobile);
reader.writeFile(missions);
//# sourceMappingURL=index.js.map