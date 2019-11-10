import mongoose from 'mongoose';
import glob from 'glob';
import config from './env';

export const connectDb = () => {
  return mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true });
};

const modelRoutes = glob.sync('../apis/**/db_models/*.js', {
  cwd: __dirname,
});

const models = modelRoutes.map(async modelUri => {
  const model = await import(`./${modelUri}`);
  return model.default;
});

export default models;
