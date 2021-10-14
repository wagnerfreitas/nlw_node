import { Request, Response } from 'express';

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
}

export { SettingController }
