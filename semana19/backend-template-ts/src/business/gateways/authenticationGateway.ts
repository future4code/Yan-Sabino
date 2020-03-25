export interface AuthenticationGateway {
  generateToken(input: UsersInfoForToken): string;
  verifyToken(token: string): UsersInfoForToken;
}

// userId = id

export interface UsersInfoForToken {
  id: string;
}
