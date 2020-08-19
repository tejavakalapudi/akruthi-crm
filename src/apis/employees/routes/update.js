import express from 'express';
import { celebrate, Joi } from 'celebrate';
import updateEmployee from '../controllers/update';
import validateAuth from '../../../middlewares/validateAuth';
import validateAdmin from '../../../middlewares/validateAdmin';

const router = express.Router();
const schema = {
  body: Joi.object()
    .keys({
      name: Joi.string(),
      leads: Joi.array().items(Joi.string()),
      conversions: Joi.array().items(Joi.string()),
      registrations: Joi.array().items(Joi.string()),
      contact: Joi.string(),
    })
    .required(),
};
router.put('/:id', celebrate(schema), validateAuth, validateAdmin, updateEmployee);
export default router;
