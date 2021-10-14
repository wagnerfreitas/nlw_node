import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingRepository } from "../repositories/SettingRepository";

interface ISettingCreate {
  chat: boolean;
  username: string;
}

class SettingService {

  private _settingsRepository: Repository<Setting>;

  constructor() {
    this._settingsRepository = getCustomRepository(SettingRepository);
  }

  async create({ chat, username }: ISettingCreate) {
    const userAlreadyExists = await this._settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = this._settingsRepository.create({
      chat,
      username,
    });

    await this._settingsRepository.save(settings);

    return settings;
  }
}

export { SettingService };
