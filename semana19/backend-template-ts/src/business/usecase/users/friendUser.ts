import { UserGateway } from "../../gateways/userGateway";

export class FriendUserUC {
  constructor(private userGateway: UserGateway) {}

  async execute(input: FriendUserUCInput) {
    await this.userGateway.createFriendRelation(input.userId, input.friendId);
  }
}

export interface FriendUserUCInput {
  userId: string;
  friendId: string;
}
