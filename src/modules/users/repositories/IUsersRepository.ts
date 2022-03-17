import { User } from "../entities/Users";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  findByName(name: string): Promise<User>;
  list(): Promise<User[]>;
  create({ name, email, password }: ICreateUserDTO): Promise<void>;
}

export { ICreateUserDTO, IUsersRepository };
