import dbModels from '../../../db_models';

const createStatus = async (req, res, next) => {
  const { statusModel } = dbModels;
  try {
    const response = await statusModel.create(req.body);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default createStatus;
