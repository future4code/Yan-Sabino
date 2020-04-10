import { VideoGateway } from "../../gateways/videoGateway";

export class DeleteVideoUC{
    constructor(private videoGateway: VideoGateway){}

    async execute(input: DeleteVideoUCInput): Promise<void>{
        await this.videoGateway.deleteVideo(input.videoId)
    }
}

export interface DeleteVideoUCInput{
    videoId: string
}