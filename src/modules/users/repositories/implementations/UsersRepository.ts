import { Repository, getRepository } from "typeorm";
import { User } from "../../entities/Users";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  //Create new user
  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);
  }
  //Verify user exist
  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });
    return user;
  }
  //List all users
  async list(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }
}

export { UsersRepository };
