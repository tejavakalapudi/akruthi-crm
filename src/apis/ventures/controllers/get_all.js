import VentureSchema from '../schemas/venture';
import { getModelByClient } from '../../../config/mongo';
import { VENTURE_SCHEMA_NAME } from '../../../constants/schemas';

const getVentures = async (req, res, next) => {
  const ventureModel = await getModelByClient(VENTURE_SCHEMA_NAME, VentureSchema);
  try {
    const response = await ventureModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default getVentures;
