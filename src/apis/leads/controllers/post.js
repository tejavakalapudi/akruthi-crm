import dbModels from '../../../db_models';

const createLead = async (req, res, next) => {
  const { leadModel } = dbModels;
  try {
    const response = await leadModel.create({
      ...req.body,
    });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default createLead;
