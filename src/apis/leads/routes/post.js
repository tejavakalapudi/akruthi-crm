import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createLead from '../controllers/post';
import validateAuth from '../../../middlewares/validateAuth';
// import validateEmployee from '../../../middlewares/validateEmployee';
// import validateVenture from '../../../middlewares/validateVenture';

const router = express.Router();
const schema = {
  body: Joi.object()
    .keys({
      customer_name: Joi.string().required(),
      contact: Joi.string().required(),
      email: Joi.string().email(),
      venture: Joi.object().keys({
        _id: Joi.string().guid(),
        name: Joi.string(),
      }),
      flat_no: Joi.string(),
      status: Joi.string(),
      employee_assigned: Joi.object().keys({
        _id: Joi.string().guid(),
        name: Joi.string(),
      }),
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

router.post('/', celebrate(schema), validateAuth, createLead);
export default router;
