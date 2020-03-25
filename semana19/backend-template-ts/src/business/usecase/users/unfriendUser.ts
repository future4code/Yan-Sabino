import { UserGateway } from "../../gateways/userGateway";
import { threadId } from "worker_threads";

export class UnfriendUserUC {
  constructor(private userGateway: UserGateway) {}

  async execute(input: UnfriendUserUCInput) {
    await this.userGateway.deleteFriendRelation(input.userId, input.friendId);
  }
}

export interface UnfriendUserUCInput {
  userId: string;
  friendId: string;
}
