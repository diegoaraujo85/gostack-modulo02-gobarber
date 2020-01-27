import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // por estar declarado aqui, só será aplicado nas rotas abaixo

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

export default routes;
