import { v4 } from "uuid";
import { BandGateway } from "../../gateways/band";
import { Band } from "../../entities/band";

export class CreateBandUC {
  constructor(private bandGateway: BandGateway) {}

  async execute(input: CreateBandUCInput): Promise<CreateBandUCOutPut> {
    const id = this.generateBandId();

    if (!input.name || input.name.length < 1) {
      throw new Error("Input name are missing!");
    }
    if (!input.music_genre || input.music_genre.length < 1) {
      throw new Error("Input music gender are missing!");
    }
    if (!input.responsible || input.responsible.length < 1) {
      throw new Error("Input responsible are missing!");
    }

    const newBand = new Band(
      id,
      input.name,
      input.music_genre,
      input.responsible
    );

    await this.bandGateway.createBand(newBand);

    return{
      message: "Band Created Successfully"
    }
  }

  private generateBandId() {
    return v4();
  }
}

export interface CreateBandUCInput {
  name: string;
  music_genre: string;
  responsible: string;
}

export interface CreateBandUCOutPut{
  message: string
}
