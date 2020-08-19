import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createEmployee from '../controllers/post';
import validateAuth from '../../../middlewares/validateAuth';

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
router.post('/', celebrate(schema), validateAuth, createEmployee);

export default router;
