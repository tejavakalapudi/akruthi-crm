import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';

const getLeadById = async (req, res, next) => {
  const leadModel = await getModelByClient('leads', LeadSchema);
  try {
    const response = await leadModel.findById(req.params.id);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getLeadById;
