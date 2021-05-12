import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['nome', 'email', 'created_at', 'updated_at'],
      });
      return res.json(users);
    } catch (err) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        attributes: ['nome', 'email', 'created_at', 'updated_at'],
      });
      return res.json(user);
    } catch (err) {
      return res.json(null);
    }
  }

  // Update

  // Delete
}

export default new UserController();
