import mongoose from 'mongoose';
import glob from 'glob';
import config from './env';
import dataModels from '../db_models';

export default async client_name => {
  global.dbConnection = await mongoose.createConnection(config.DB_URI, {
    useNewUrlParser: true,
    dbName: client_name,
    user: config.DB_USER,
    pass: config.DB_PASS,
  });

  const schemaRoutes = glob.sync('../apis/**/schemas/*.js', {
    cwd: __dirname,
  });

  await schemaRoutes.map(async schemaUri => {
    const schema = await import(`./${schemaUri}`);

    const schemaName = schemaUri
      .split('/')
      .slice(-1)[0]
      .split('.js')[0];

    dataModels[`${schemaName}Model`] = global.dbConnection.model(schemaName, schema.default);
  });

  return global.dbConnection;
};
