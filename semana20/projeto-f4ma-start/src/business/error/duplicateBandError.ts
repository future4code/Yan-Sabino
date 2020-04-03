import { BaseError } from "./baseError";

export class DuplicateUserError extends BaseError {
  constructor() {
    super(409, "Usuario já existe");
  }
}