import userSchema from '../schemas/user';

const createAuth = async (req, res, next) => {
  const userModel = global.dbConnection.model('User', userSchema);
  try {
    const response = await userModel.create({ name: 'Teja' });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default createAuth;
