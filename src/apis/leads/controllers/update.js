import dbModels from '../../../db_models';

const updateLead = async (req, res, next) => {
  const { leadModel } = dbModels;
  try {
    const response = await leadModel.findByIdAndUpdate(req.params.id, req.body);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default updateLead;
