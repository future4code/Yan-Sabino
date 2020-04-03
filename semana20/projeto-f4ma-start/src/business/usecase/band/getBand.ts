import { BandGateway } from "../../gateways/band";
import { Band } from "../../entities/band";

export class GetBandUC {
  constructor(private bandGateway: BandGateway) {}

  public async execute(
    input: GetBandByIdUCInput
  ): Promise<GetBandByIdUCOutPut> {
    let band: Band | undefined;

    if (input.id) {
      band = await this.bandGateway.getBandById(input.id);
    }

    if (input.name) {
      band = await this.bandGateway.getBandByName(input.name);
    }

    if (!band) {
      throw new Error("Band not found");
    }

    return {
      id: band.getId(),
      name: band.getName(),
      musicGenre: band.getMusicGenre(),
      responsible: band.getResponsible(),
    };
  }
}

export interface GetBandByIdUCInput {
  id: string;
  name: string;
}

export interface GetBandByIdUCOutPut {
  id: string;
  name: string;
  musicGenre: string;
  responsible: string;
}
