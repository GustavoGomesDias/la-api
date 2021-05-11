import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];

const conection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conection));
