import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createLead from '../controllers/post';
import validateAuth from '../../../middlewares/validateAuth';
// import validateAdmin from '../../../middlewares/validateAdmin';

const router = express.Router();
const schema = {
  body: Joi.object()
    .keys({
      customer_name: Joi.string().required(),
      contact: Joi.string().required(),
      venture: Joi.string().guid(),
      flat_No: Joi.string(),
      status: Joi.string(),
      employee_assigned: Joi.string().guid(),
      source: Joi.string(),
    })
    .required(),
};
router.post('/', celebrate(schema), validateAuth, createLead);
export default router;
