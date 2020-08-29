import VentureSchema from '../schemas/venture';
import { getModelByClient } from '../../../config/mongo';

const updateVenture = async (req, res, next) => {
  const ventureModel = await getModelByClient('venture', VentureSchema);
  try {
    const response = await ventureModel.findByIdAndUpdate(req.params.id, req.body);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default updateVenture;
