import db_models from '../../../db_models';

const getVentureById = async (req, res, next) => {
  const { ventureModel } = db_models;
  try {
    const response = await ventureModel.find({ _id: req.params.id }).exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getVentureById;
