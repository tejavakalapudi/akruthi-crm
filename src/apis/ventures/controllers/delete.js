import db_models from '../../../db_models';

const deleteVenture = async (req, res, next) => {
  const { ventureModel } = db_models;
  try {
    const response = await ventureModel.findByIdAndDelete(req.params.id);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteVenture;
