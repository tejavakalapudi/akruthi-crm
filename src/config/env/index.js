export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/node-express-mongodb-server',
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  HOUSING_KEY: process.env.HOUSING_KEY,
};
