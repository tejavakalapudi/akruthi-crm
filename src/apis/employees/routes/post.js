import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createEmployee from '../controllers/post';
import validateAuth from '../../../middlewares/validateAuth';
import validateAdmin from '../../../middlewares/validateAdmin';

const router = express.Router();
const schema = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      leads: Joi.array()
        .items(Joi.string())
        .required(),
      conversions: Joi.array()
        .items(Joi.string())
        .required(),
      registrations: Joi.array()
        .items(Joi.string())
        .required(),
      contact: Joi.string().required(),
    })
    .required(),
};
router.post('/', celebrate(schema), validateAuth, validateAdmin, createEmployee);

export default router;
