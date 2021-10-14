import { Request, Response } from 'express';

import { MessageService } from '../services/MessageService';

class MessageController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;

    try {
      const messageService = new MessageService();
      const user = await messageService.create({
        admin_id,
        text,
        user_id,
      });

      return response.json(user);
    } catch (e) {
      return response.status(400).json({
        message: e.message
      });
    }
  }

  async showByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const messageService = new MessageService();

    const list = await messageService.listByUser(id);

    return response.json(list);
  }
}

export { MessageController }
