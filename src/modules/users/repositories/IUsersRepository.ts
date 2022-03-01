import { User } from "../model/User";

interface ICreateUserDTO {
  name: String;
  email: String;
  password: String;
}

interface IUsersRepository {
  create({ name, email, password }: ICreateUserDTO): void;
}

export { ICreateUserDTO, IUsersRepository };
