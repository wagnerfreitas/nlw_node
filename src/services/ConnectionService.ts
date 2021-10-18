import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionRepository } from "../repositories/ConnectionRepository";

interface IConnectionCreate {
  admin_id?: string;
  socket_id: string;
  user_id: string;
  id?: string;
}

class ConnectionService {

  private _connectionsRepository: Repository<Connection>;

  constructor() {
    this._connectionsRepository = getCustomRepository(ConnectionRepository);
  }

  async create({ admin_id, socket_id, user_id, id }: IConnectionCreate) {
    const connection = this._connectionsRepository.create({
      admin_id,
      socket_id,
      user_id,
      id
    });

    await this._connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    return await this._connectionsRepository.findOne({
      user_id
    });
  }
}

export { ConnectionService };
