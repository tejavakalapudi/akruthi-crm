import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';
import { LEAD_SCHEMA_NAME } from '../../../constants/schemas';

const getLeadById = async (req, res, next) => {
  const leadModel = await getModelByClient(LEAD_SCHEMA_NAME, LeadSchema);
  try {
    const response = await leadModel.findById(req.params.id);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getLeadById;
