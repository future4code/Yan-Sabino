import { v4 } from "uuid";
import { BandGateway } from "../../gateways/band";
import { Band } from "../../entities/band";

export class CreateBandUC {
  constructor(private bandGateway: BandGateway) {}

  async execute(input: CreateBandUCInput) {
    const bandId = this.generateBandId();

    const newBand = new Band(
      bandId,
      input.name,
      input.musicGenre,
      input.responsible
    );

    await this.bandGateway.createBand(newBand);
  }

  private generateBandId() {
    return v4();
  }
}

export interface CreateBandUCInput {
  name: string;
  musicGenre: string;
  responsible: string;
}
