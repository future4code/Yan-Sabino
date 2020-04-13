import { VideoGateway } from "../../gateways/videoGateway";
import { AuthenticationGateway } from "../../gateways/authenticationGateway";

export class GetAllVideoInfosUC {
    constructor(
        private videoGateway: VideoGateway,
        private authenticationGateway: AuthenticationGateway
        ){}

    public async execute(input: GetAllVideoInfosUCInput): Promise<GetAllVideoInfosUCOutput>{

        const userInfo = await this.authenticationGateway.getUsersInfoFromToken(
            input.token
        );

        if (!userInfo) {
            throw new Error("User Not Found");
        }

        const video = await this.videoGateway.getAllVideoInfos(
            input.videoId
        )

        return {
            url: video.getUrl(),
            description: video.getDescription(),
            title: video.getTitle(),
            name: video.getName(),
            picture:video.getPicture()
        }
    }
}

export interface GetAllVideoInfosUCInput{
    videoId: string;
    token: string;
}

//verificar porque não está pegando o nome e a picture

export interface GetAllVideoInfosUCOutput{
    url: string
    description: string
    title: string
    name: string
    picture: string
}

