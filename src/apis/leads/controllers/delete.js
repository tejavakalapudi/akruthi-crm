import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';

const deleteLead = async (req, res, next) => {
  const leadModel = await getModelByClient('leads', LeadSchema);
  try {
    const response = await leadModel.findByIdAndDelete(req.params.id);

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteLead;
