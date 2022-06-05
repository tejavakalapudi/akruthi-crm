import express from 'express';
import { celebrate, Joi } from 'celebrate';
import updateLead from '../controllers/update';
import validateAuth from '../../../middlewares/validateAuth';
import validateEmployee from '../../../middlewares/validateEmployee';
import validateVenture from '../../../middlewares/validateVenture';

const router = express.Router();
const schema = {
  body: Joi.object()
    .keys({
      customer_name: Joi.string(),
      contact: Joi.string(),
      email: Joi.string().email(),
      venture: Joi.string().guid(),
      flat_no: Joi.string(),
      status: Joi.string(),
      employee_assigned: Joi.string().guid(),
      source: Joi.string(),
      notes: Joi.array().items(
        Joi.object().keys({
          text: Joi.string(),
          source: Joi.string(),
        })
      ),
      followup_required: Joi.bool(),
      visit_scheduled: Joi.bool(),
    })
    .required(),
};
router.put('/:id', celebrate(schema), validateAuth, validateEmployee, validateVenture, updateLead);
export default router;
