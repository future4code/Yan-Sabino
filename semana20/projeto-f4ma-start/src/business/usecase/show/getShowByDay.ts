import { ShowGateway } from "../../gateways/show";
import { ShowWeekDay } from "../../entities/show";
export class GetShowsByDayUC {
  constructor(private showGateway: ShowGateway) {}
  public async execute(
    input: GetShowsByDayUCInput
  ): Promise<GetShowsByDayUCOutput> {
    const show = await this.showGateway.getShowsByDay(input.week_day);
    if (!show) {
      throw new Error("Doesn't have any shows");
    }
    return {
      shows: show.map((show) => {
        return {
          id: show.getId(),
          week_day: show.getWeekDate(),
          start_time: show.getStartTime(),
          end_time: show.getEndTime(),
          band_id: show.getBandId(),
        };
      }),
    };
  }
}
export interface GetShowsByDayUCInput {
  week_day: ShowWeekDay;
}
export interface GetShowsByDayUCOutput {
  shows: GetShowsByDayUCOutputShows[];
}
export interface GetShowsByDayUCOutputShows {
  id: string;
  week_day: ShowWeekDay;
  start_time: number;
  end_time: number;
  band_id: string;
}
