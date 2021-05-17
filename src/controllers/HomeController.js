class HomeController {
  async index(req, res) {
    res.json({ index: 'Index' });
  }
}

export default new HomeController();
