import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego Fernandes',
    email: 'diego@rockeseat.com.br',
    password_hash: '1234323423',
  });
  return res.json(user);
});

export default routes;
