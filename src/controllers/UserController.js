import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create({
      nome: 'Teste',
      email: 'email@email.com',
      password: '123456',
    });
    res.json(user);
  }
}

export default new UserController();
