"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const fs_1 = require("fs");
moment.locale("pt-br");
const jsonFileName = "calendarData.json";
const eventName = process.argv[4];
const eventDescription = process.argv[5];
const eventStart = moment(process.argv[6], "DD/MM/YYYY HH:mm");
const eventEnd = moment(process.argv[7], "DD/MM/YYYY HH:mm");
const getEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const readEventsPromise = new Promise((resolve, reject) => {
        fs_1.readFile(jsonFileName, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data.toString());
        });
    });
    const jsonContent = yield readEventsPromise;
    console.log(jsonContent);
    const eventsObject = JSON.parse(jsonContent);
    eventsObject.eventList.push({
        name: eventName,
        description: eventDescription,
        startDate: eventStart.format("DD/MM/YYYY HH:mm"),
        endEvent: eventEnd.format("DD/MM/YYYY HH:mm")
    });
    fs_1.writeFileSync(jsonFileName, JSON.stringify(eventsObject));
});
getEvents()
    .then((eventsObject) => console.log(eventsObject.eventList))
    .catch(err => console.error(err));
//# sourceMappingURL=calendar.js.map