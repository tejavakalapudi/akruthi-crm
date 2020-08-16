export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/node-express-mongodb-server',
  DB_URI: process.env.DB_URI,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
};
