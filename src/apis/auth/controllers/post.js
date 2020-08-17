const createAuth = async (req, res, next) => {
  try {
    return res.send(res.locals.user);
  } catch (error) {
    return next(error);
  }
};

export default createAuth;
