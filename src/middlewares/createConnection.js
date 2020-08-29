import Boom from '@hapi/boom';
import createConnection from '../config/mongo';

export default async (req, res, next) => {
  try {
    const clientId = req.headers['x-client-id'];
    if (!clientId) throw Boom.badRequest('Client ID is missing in headers');

    await createConnection(clientId);
    return next();
  } catch (error) {
    return next(error);
  }
};
