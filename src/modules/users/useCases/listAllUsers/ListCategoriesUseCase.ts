/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { User } from "../../entities/Users";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}

export { ListCategoriesUseCase };
