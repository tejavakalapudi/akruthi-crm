import VentureSchema from '../schemas/venture';
import { getModelByClient } from '../../../config/mongo';
import { VENTURE_SCHEMA_NAME } from '../../../constants/schemas';

const updateVenture = async (req, res, next) => {
  const ventureModel = await getModelByClient(VENTURE_SCHEMA_NAME, VentureSchema);
  try {
    const response = await ventureModel.findByIdAndUpdate(req.params.id, req.body);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default updateVenture;
