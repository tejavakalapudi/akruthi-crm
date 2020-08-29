import mongoose from 'mongoose';
import Boom from '@hapi/boom';
import config from './env';

const connect = dbUrl =>
  mongoose.createConnection(dbUrl, {
    useNewUrlParser: true,
    user: config.DB_USER,
    pass: config.DB_PASS,
  });

const connectToMongoDB = () => {
  const db = connect(config.DB_URI);
  db.on('open', () => {
    console.info(`Mongoose connection open to ${JSON.stringify(config.DB_URI)}`);
  });
  db.on('error', err => {
    console.info(`Mongoose connection error: ${err} with connection info ${JSON.stringify(config.DB_URI)}`);
    process.exit(0);
  });
  return db;
};

export const mongodb = connectToMongoDB();

export const getModelByClient = async (modelName, schema) => global.dbConnection.model(modelName, schema);

/**
 * Creating New MongoDb Connection obect by Switching DB
 */
export default async client_name => {
  if (mongodb) {
    try {
      // useDb will return new connection
      global.dbConnection = await mongodb.useDb(client_name, { useCache: true });
      console.log(`DB switched to ${client_name}`);
      return global.dbConnection;
    } catch (error) {
      console.log(`DB switch failed with`, error);
      throw Boom.serverUnavailable('Other Err');
    }
  }
  throw Boom.serverUnavailable('unavailable');
};
