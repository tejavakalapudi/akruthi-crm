import StatusSchema from '../schemas/status';

const createStatus = async (req, res, next) => {
  const StatusModel = global.dbConnection.model('User', StatusSchema);

  try {
    const response = await StatusModel.create({ ...req.body });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default createStatus;
