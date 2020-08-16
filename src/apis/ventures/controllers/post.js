import dbModels from '../../../db_models';

const createVenture = async (req, res, next) => {
  const { ventureModel } = dbModels;

  try {
    const response = await ventureModel.create({
      ...req.body,
      available: req.body.flats,
    });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default createVenture;
