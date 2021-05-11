import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: 'Teste',
      sobrenome: 'TesteSobre',
      email: 'email@email.com',
      idade: 12,
      peso: 14,
      altura: 2.5,
    });
    res.json(aluno);
  }
}

export default new HomeController();
