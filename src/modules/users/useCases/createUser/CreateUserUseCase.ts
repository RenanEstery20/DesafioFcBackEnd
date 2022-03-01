import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: String;
  email: String;
  password: String;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ name, email, password }: IRequest): void {
    this.usersRepository.create({
      name,
      email,
      password,
    });
  }
}

export { CreateUserUseCase };
