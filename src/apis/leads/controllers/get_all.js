import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';
import { LEAD_SCHEMA_NAME } from '../../../constants/schemas';

const getAllLeads = async (req, res, next) => {
  const leadModel = await getModelByClient(LEAD_SCHEMA_NAME, LeadSchema);
  try {
    const response = await leadModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getAllLeads;
