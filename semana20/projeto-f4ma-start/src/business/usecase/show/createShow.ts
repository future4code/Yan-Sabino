import { v4 } from "uuid";
import { ShowGateway } from "../../gateways/show";
import { Show, ShowWeekDay } from "../../entities/show";

export class CreateShowUC {
  constructor(private showGateway: ShowGateway) {}
  async execute(input: CreateShowUCInput) {
    const showId = this.generateShowId();
    

    if(!input.week_day || input.week_day.length < 1){
        throw new Error("input weekday is missing")
    }

    if(!input.start_time || !input.end_time || !input.band_id){
        throw new Error("There is one or more inputs missing")
    }

    if(!input.week_day || input.week_day.length < 1){
        throw new Error("input weekday is missing")
    }

    if(input.start_time < 8 || input.start_time > 23){
        throw new Error("Start time must be between 8 and 23")
    }
    if(input.end_time < 8 || input.end_time > 23){
        throw new Error("End time must be between 8 and 23")
    }
    
    if(input.start_time % 1 !== 0) {
        throw new Error("Start time must be entire")
    }

    if(input.end_time % 1 !== 0) {
        throw new Error("End time must be entire")
    }

    const showTime = await this.showGateway.getShows(
        input.week_day,
        input.start_time,
        input.end_time
    )

    if(showTime){
        throw new Error("There is already a scheduled show at this time")
    }

    const newShow = new Show(
      showId,
      input.week_day,
      input.start_time,
      input.end_time,
      input.band_id
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
  week_day: ShowWeekDay;
  start_time: number;
  end_time: number;
  band_id: string;
}
