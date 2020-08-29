import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';

const getAllLeads = async (req, res, next) => {
  const leadModel = await getModelByClient('leads', LeadSchema);
  try {
    const response = await leadModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getAllLeads;
