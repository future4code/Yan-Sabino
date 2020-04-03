import { BandGateway } from "../../gateways/band";

export class GetBandByIdUC {
    constructor(private bandGateway: BandGateway){}

    public async execute(input: GetBandByIdUCInput ): Promise<GetBandByIdUCOutPut>{
        const band = await this.bandGateway.getBandById(input.id)

        if(!band){
            throw new Error("Band not found")
        }

        return {
            id: band.getId(),
            name: band.getName(),
            musicGenre: band.getMusicGenre(),
            responsible: band.getResponsible()
        }
    }
}

export interface GetBandByIdUCInput{
    id: string
}

export interface GetBandByIdUCOutPut{
    id: string,
    name: string,
    musicGenre: string,
    responsible: string
}