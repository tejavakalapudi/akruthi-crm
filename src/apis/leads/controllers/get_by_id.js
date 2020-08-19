import dbModels from '../../../db_models';

const getLeadById = async (req, res, next) => {
  const { leadModel } = dbModels;
  try {
    const response = await leadModel.findById(req.params.id);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getLeadById;
