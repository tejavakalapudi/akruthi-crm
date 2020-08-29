import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';

const createLead = async (req, res, next) => {
  const leadModel = await getModelByClient('leads', LeadSchema);
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
