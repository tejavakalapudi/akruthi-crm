import express from 'express';
import { celebrate, Joi } from 'celebrate';
import updateLead from '../controllers/update';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();
const schema = {
  body: Joi.object()
    .keys({
      customer_name: Joi.string(),
      contact: Joi.string(),
      venture: Joi.string().guid(),
      flat_No: Joi.string(),
      status: Joi.string(),
      employee_assigned: Joi.string().guid(),
      source: Joi.string(),
    })
    .required(),
};
router.put('/:id', celebrate(schema), validateAuth, updateLead);
export default router;
