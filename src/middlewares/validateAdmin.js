import Boom from '@hapi/boom';

export default async (req, res, next) => {
  try {
    if (res.locals.user && res.locals.user.admin) {
      return next();
    }
    throw Boom.unauthorized('Access denied');
  } catch (error) {
    return next(error);
  }
};
