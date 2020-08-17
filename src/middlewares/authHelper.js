import Boom from '@hapi/boom';
import firebaseAuth from '../config/firebase';

export default async (req, res, next) => {
  try {
    const accessTokenFromClient = req.token;
    if (!accessTokenFromClient) throw Boom.unauthorized('Access Token missing from client');

    try {
      const userRecord = await firebaseAuth.verifyIdToken(accessTokenFromClient);
      res.locals.user = userRecord;
      return next();
    } catch (error) {
      throw Boom.unauthorized(error);
    }
  } catch (error) {
    return next(error);
  }
};
