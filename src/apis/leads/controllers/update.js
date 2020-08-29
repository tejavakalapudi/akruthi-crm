import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';

const updateLead = async (req, res, next) => {
  const leadModel = await getModelByClient('leads', LeadSchema);
  try {
    const response = await leadModel.findByIdAndUpdate(req.params.id, req.body);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default updateLead;
