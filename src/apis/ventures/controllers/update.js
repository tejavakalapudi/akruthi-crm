import db_models from '../../../db_models';

const updateVenture = async (req, res, next) => {
  const { ventureModel } = db_models;
  try {
    const response = await ventureModel.findByIdAndUpdate(req.params.id, req.body);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default updateVenture;
