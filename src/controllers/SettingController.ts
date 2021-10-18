import { Request, Response, response } from 'express';

import { SettingService } from '../services/SettingService';

class SettingController {
  async create(request: Request, response: Response): Promise<Response> {
    const { chat, username } = request.body;

    try {

      const settingService = new SettingService();
      const settings = await settingService.create({ chat, username });

      return response.json(settings);
    } catch (e) {
      return response.status(400).json({
        message: e.message
      });
    }
  }

  async findByUserName(request: Request, response: Response) {
    const { username } = request.params;

    const settingService = new SettingService();

    const setting = await settingService.findByUserName(username);

    return response.json(setting);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingService = new SettingService();

    await settingService.update(username, chat);

    return response.json();
  }
}

export { SettingController }
