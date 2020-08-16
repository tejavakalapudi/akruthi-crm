import mongoose from 'mongoose';
import config from './env';

export default async client_name => {
  return mongoose.createConnection(config.DB_URI, {
    useNewUrlParser: true,
    dbName: client_name,
    user: config.DB_USER,
    pass: config.DB_PASS,
  });
};
