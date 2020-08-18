import express from 'express';
import { celebrate, Joi } from 'celebrate';
import updateEmployee from '../controllers/update';
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
router.put('/:id', celebrate(schema), verifyAuth, updateEmployee);
export default router;
