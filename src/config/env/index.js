export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/node-express-mongodb-server',
};
