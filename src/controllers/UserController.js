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
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['ID não enviado.'],
        });
      }
      const user = await User.findByPk(id, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
      });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe.'],
        });
      }

      const newData = await user.update(req.body, {
        attributes: ['nome', 'email', 'created_at', 'updated_at'],
      });

      return res.json(newData);
    } catch (err) {
      console.log(err);
      return res.json(null);
    }
  }

  // Delete
}

export default new UserController();
