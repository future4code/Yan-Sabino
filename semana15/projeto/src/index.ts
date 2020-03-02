import { MissionWeb } from "./Classes/missionWeb";
import { FileManager } from "./Classes/FileManager";
import { MissionMobile } from "./Classes/missionMobile";

const reader = new FileManager("mission.json");

const missions = reader.readFile();

const missaoWeb = new MissionWeb("Bouman", new Date(), new Date());

// console.log(missaoWeb);

const missaoMobile = new MissionMobile("turma 1", new Date(), new Date());

// console.log(missaoMobile);

missions.push(missaoWeb, missaoMobile);

reader.writeFile(missions);
