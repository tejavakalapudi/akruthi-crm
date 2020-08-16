import StatusSchema from '../schemas/status';

const getStatuses = async (req, res, next) => {
  const StatusModel = global.dbConnection.model('User', StatusSchema);

  try {
    const response = await StatusModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default getStatuses;
