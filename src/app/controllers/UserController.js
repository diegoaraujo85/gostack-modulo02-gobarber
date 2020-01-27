import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async show(req, res) {}

  async update(req, res) {
    console.log(req.UserId);

    return res.json({ ok: true });
  }

  async delete(req, res) {}
}

export default new UserController();
