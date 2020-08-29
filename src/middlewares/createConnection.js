import createConnection from '../config/mongo';

export default async (req, res, next) => {
  try {
    await createConnection(req.headers['x-client-id']);
    return next();
  } catch (error) {
    return next(error);
  }
};
