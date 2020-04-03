import { v4 } from "uuid";
import { ShowGateway } from "../../gateways/show";
import { Show, ShowWeekDay } from "../../entities/show";

export class CreateShowUC {
  constructor(private showGateway: ShowGateway) {}
  async execute(input: CreateShowUCInput) {
    const showId = this.generateShowId();
    console.log(input.weekDate)

    if(!input.weekDate || input.weekDate.length < 1){
        throw new Error("input weekday is missing")
    }

    if(!input.startTime || !input.endTime || !input.bandId){
        throw new Error("There is one or more inputs missing")
    }

    if(!input.weekDate || input.weekDate.length < 1){
        throw new Error("input weekday is missing")
    }

    if(input.startTime < 8 || input.startTime > 23){
        throw new Error("Start time must be between 8 and 23")
    }
    if(input.endTime < 8 || input.endTime > 23){
        throw new Error("End time must be between 8 and 23")
    }
    
    if(input.startTime % 1 !== 0) {
        throw new Error("Start time must be entire")
    }

    if(input.endTime % 1 !== 0) {
        throw new Error("End time must be entire")
    }

    const showTime = await this.showGateway.getShows(
        input.weekDate,
        input.startTime,
        input.endTime
    )

    if(showTime){
        throw new Error("There is already a scheduled show at this time")
    }

    const newShow = new Show(
      showId,
      input.weekDate,
      input.startTime,
      input.endTime,
      input.bandId
    );

    await this.showGateway.createShow(newShow)

    return{
        message: "Show Created SuccessFully"
    }
  }

  private generateShowId() {
    return v4();
  }
}

export interface CreateShowUCInput {
  weekDate: ShowWeekDay;
  startTime: number;
  endTime: number;
  bandId: string;
}
