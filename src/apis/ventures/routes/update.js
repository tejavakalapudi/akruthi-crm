import express from 'express';
import { celebrate, Joi } from 'celebrate';
import updateVenture from '../controllers/update';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();
const schema = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      flats: Joi.array()
        .items(Joi.string())
        .required(),
      available: Joi.array()
        .items(Joi.string())
        .required(),
    })
    .required(),
};
router.put('/:id', celebrate(schema), validateAuth, updateVenture);
export default router;
