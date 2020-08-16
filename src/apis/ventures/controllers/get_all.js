import dbModels from '../../../db_models';

const getVentures = async (req, res, next) => {
  const { ventureModel } = dbModels;
  try {
    const response = await ventureModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default getVentures;
