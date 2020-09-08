import VentureSchema from '../schemas/venture';
import { getModelByClient } from '../../../config/mongo';
import { VENTURE_SCHEMA_NAME } from '../../../constants/schemas';

const deleteVenture = async (req, res, next) => {
  const ventureModel = await getModelByClient(VENTURE_SCHEMA_NAME, VentureSchema);

  try {
    const response = await ventureModel.findByIdAndDelete(req.params.id);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteVenture;
