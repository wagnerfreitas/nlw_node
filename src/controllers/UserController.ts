import { Request, Response } from 'express';

import { UserService } from '../services/UserService';

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    try {

      const userService = new UserService();
      const user = await userService.create(email);

      return response.json(user);
    } catch (e) {
      return response.status(400).json({
        message: e.message
      });
    }
  }
}

export { UserController }
