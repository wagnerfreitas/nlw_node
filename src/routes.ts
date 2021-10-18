import { Router } from 'express';
import { SettingController } from './controllers/SettingController';
import { UserController } from './controllers/UserController';
import { MessageController } from './controllers/MessageController';

const routes = Router();

const settingController = new SettingController();
const userController = new UserController();
const messageController = new MessageController();

routes.post('/settings', settingController.create);
routes.post('/settings/:username', settingController.findByUserName);

routes.post('/users', userController.create);

routes.post('/messages', messageController.create);
routes.get('/messages/:id', messageController.showByUser);

export { routes };
