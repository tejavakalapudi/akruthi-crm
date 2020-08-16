import dbModels from '../../../db_models';

const createAuth = async (req, res, next) => {
  const { userModel } = dbModels;

  try {
    const response = await userModel.create({ name: 'Teja' });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default createAuth;
