const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: 'jhon@email.com',
        password_hash: bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe 2',
        email: 'jhon2@email.com',
        password_hash: bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {},
};
