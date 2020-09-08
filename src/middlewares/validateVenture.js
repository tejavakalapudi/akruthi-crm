import Boom from '@hapi/boom';

import VentureSchema from '../apis/ventures/schemas/venture';
import { VENTURE_SCHEMA_NAME } from '../constants/schemas';
import { getModelByClient } from '../config/mongo';

export default async (req, res, next) => {
  try {
    const ventureModel = await getModelByClient(VENTURE_SCHEMA_NAME, VentureSchema);
    if (req.body.venture) {
      try {
        const ventureSelected = await ventureModel.findById(req.body.venture).exec();
        req.body = {
          ...req.body,
          venture: {
            _id: ventureSelected._id,
            name: ventureSelected.name,
          },
        };
        res.locals.ventureSelected = ventureSelected;
      } catch (error) {
        throw Boom.badRequest('Invalid Venture ID');
      }
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
