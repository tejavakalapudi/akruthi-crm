import VentureSchema from '../schemas/venture';
import { getModelByClient } from '../../../config/mongo';

const createVenture = async (req, res, next) => {
  const ventureModel = await getModelByClient('venture', VentureSchema);

  try {
    const response = await ventureModel.create({
      ...req.body,
      available: req.body.flats,
    });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default createVenture;
