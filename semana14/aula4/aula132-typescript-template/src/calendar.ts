import * as moment from "moment";
import { readFile, writeFileSync } from "fs";
moment.locale("pt-br");

const jsonFileName: string = "calendarData.json";
const eventName: string = process.argv[4];
const eventDescription: string = process.argv[5];
const eventStart: any = moment(process.argv[6], "DD/MM/YYYY HH:mm");
const eventEnd: any = moment(process.argv[7], "DD/MM/YYYY HH:mm");

type event = {
  name: string;
  description: string;
  startDate: Date;
  endEvent: Date;
};

type eventsFile = {
  eventList: event[];
};

const getEvents = async () => {
  const readEventsPromise: Promise<string> = new Promise((resolve, reject) => {
    readFile(jsonFileName, (err: Error, data: Buffer) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data.toString());
    });
  });

  const jsonContent: string = await readEventsPromise;
  console.log(jsonContent);
  const eventsObject: eventsFile = JSON.parse(jsonContent);
  eventsObject.eventList.push({
    name: eventName,
    description: eventDescription,
    startDate: eventStart.format("DD/MM/YYYY HH:mm"),
    endEvent: eventEnd.format("DD/MM/YYYY HH:mm")
  });
  writeFileSync(jsonFileName, JSON.stringify(eventsObject));
};

getEvents()
  .then((eventsObject: any) => console.log(eventsObject.eventList))
  .catch(err => console.error(err));
