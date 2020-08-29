import VentureSchema from '../schemas/venture';
import { getModelByClient } from '../../../config/mongo';

const deleteVenture = async (req, res, next) => {
  const ventureModel = await getModelByClient('venture', VentureSchema);

  try {
    const response = await ventureModel.findByIdAndDelete(req.params.id);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteVenture;
