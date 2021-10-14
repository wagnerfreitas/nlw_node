import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class UserService {

  private _usersRepository: Repository<User>;
  
  constructor() {
    this._usersRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    const userAlreadyExists = await this._usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = this._usersRepository.create({
      email,
    });

    await this._usersRepository.save(user);

    return user;
  }
}

export { UserService };
