import VentureSchema from '../schemas/venture';
import { getModelByClient } from '../../../config/mongo';

const getVentureById = async (req, res, next) => {
  const ventureModel = await getModelByClient('venture', VentureSchema);
  try {
    const response = await ventureModel.find({ _id: req.params.id }).exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getVentureById;
