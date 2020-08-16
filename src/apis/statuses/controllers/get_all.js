import dbModels from '../../../db_models';

const getStatuses = async (req, res, next) => {
  const { statusModel } = dbModels;
  try {
    const response = await statusModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default getStatuses;
