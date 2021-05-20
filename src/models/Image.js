import Sequelize, { Model } from 'sequelize';

export default class Image extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },

      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'images',
    });
    return this;
  }

  static associate(models) {
    // Esse model "pertence" à aluno.
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
