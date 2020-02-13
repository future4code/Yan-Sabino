import * as moment from "moment";
import { readFile, writeFile, writeFileSync } from "fs";
moment.locale("pt-br");

const jsonFileName: string = "calendarData.json";

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
      //   console.log(data);
      resolve(data.toString());
    });
  });

  const jsonContent: string = await readEventsPromise;
  console.log(jsonContent);
  const eventsObject: eventsFile = JSON.parse(jsonContent);
  eventsObject.eventList.push({
    name: "yan",
    description: "fazer o projeto",
    startDate: new Date(),
    endEvent: new Date()
  });
  writeFileSync(jsonFileName, JSON.stringify(eventsObject));
};

// const createEvent = () => {

//     writeFileSync(jsonFileName, {
//         name: "yan";
//         description: "fazer o projeto";
//         startDate: Date;
//         endEvent: Date;
//     });

// };

getEvents().then((eventsObject: any) => console.log(eventsObject.eventList));
