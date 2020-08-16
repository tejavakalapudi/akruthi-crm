import createConnection from '../config/mongo';

export default async (req, res, next) => {
  try {
    global.dbConnection = await createConnection(req.body.client_name);
    return next();
  } catch (error) {
    return next(error);
  }
};
