import dbModels from '../../../db_models';

const getAllLeads = async (req, res, next) => {
  const { leadModel } = dbModels;
  try {
    const response = await leadModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getAllLeads;
