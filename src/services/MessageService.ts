import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/MessageRepository";

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessageService {

  private _messagesRepository: Repository<Message>;

  constructor() {
    this._messagesRepository = getCustomRepository(MessageRepository);
  }

  async create({ admin_id, text, user_id }: IMessageCreate) {
    const message = this._messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await this._messagesRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    const list = await this._messagesRepository.find({
      where: { user_id },
      relations: [ "user" ]
    });

    return list;
  }
}

export { MessageService };
