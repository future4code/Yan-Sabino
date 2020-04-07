import { AuthenticationGateway } from "../gateways/authenticationGateway";
import { UserGateway } from "../gateways/userGateway";
import { CryptographyGateway } from "../gateways/cryptographyGateway";

export class ChangePasswordUC {
  constructor(
    private db: UserGateway,
    private authenticationGateway: AuthenticationGateway,
    private cryptographyGateway: CryptographyGateway
  ) {}

  public async execute(
    input: ChangePasswordUCInput
  ): Promise<ChangePasswordUCOutput> {
    if (!input.token) {
      throw new Error("Missing authorization token");
    }

    // [CHECK] INPUT: token, email, senha antiga, senha nova
    // [CHECK] token -> id do usuário
    const usersInfo = this.authenticationGateway.getUsersInfoFromToken(
      input.token
    );
    const id = usersInfo.userId;

    // id do usuário -> banco pegar o usuário com esse id
    const user = await this.db.getUserById(id);
    if (!user) {
      throw new Error("User not found");
    }

    // usuário -> 1. comparar o email enviado na requisicão com o email falso
    if (user.getEmail() !== input.email) {
      throw new Error("Incorret information");
    }

    // usuário -> 2. compara a senha antiga do usuário com a senha salva no banco
    const isPasswordCorrect = await this.cryptographyGateway.compare(
      input.oldPassword,
      user.getPassword()
    );
    if (!isPasswordCorrect) {
      throw new Error("Incorret information");
    }

    // banco -> autaliza a senha com a nova senha
    const pass = await this.cryptographyGateway.encrypt(input.newPassword);
    await this.db.updatePassword(user.getId(), pass);

    // [CHECK] devolver um novo token
    const token = this.authenticationGateway.generateToken({
      userId: user.getId(),
      type: user.getType()
    });

    return {
      token
    };
  }
}

interface ChangePasswordUCInput {
  token: string;
  email: string;
  oldPassword: string;
  newPassword: string;
}

interface ChangePasswordUCOutput {
  token: string;
}
