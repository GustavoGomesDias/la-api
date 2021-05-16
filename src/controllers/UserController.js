import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
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
        attributes: ['id', 'nome', 'email'],
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
        attributes: ['id', 'nome', 'email'],
      });
      return res.json(user);
    } catch (err) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
      });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe.'],
        });
      }

      const newData = await user.update(req.body, {
        attributes: ['id', 'nome', 'email'],
      });

      return res.json(newData);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
      });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json({ message: 'Usuário deletado.' });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
