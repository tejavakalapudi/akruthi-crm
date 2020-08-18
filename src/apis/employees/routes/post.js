import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createEmployee from '../controllers/post';
import verifyAuth from '../../../middlewares/authHelper';

const router = express.Router();
const schema = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      leads: Joi.array()
        .items(Joi.string())
        .required(),
      conversion: Joi.array()
        .items(Joi.string())
        .required(),
      registration: Joi.array()
        .items(Joi.string())
        .required(),
      contact: Joi.string().required(),
    })
    .required(),
};
router.post('/', celebrate(schema), verifyAuth, createEmployee);

export default router;
