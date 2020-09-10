import express from 'express';
import { celebrate, Joi } from 'celebrate';
import getAllLeads from '../controllers/get_all';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

const schema = {
  query: {
    venture: Joi.string().guid(),
    employee_assigned: Joi.string().guid(),
    status: Joi.string(),
    pre_sale: Joi.boolean(),
    post_sale: Joi.boolean(),
    source: Joi.string(),
    page: Joi.number().default(1),
    limit: Joi.number().default(20),
    sort_by: Joi.object({
      date: Joi.string(),
    }).default({
      date: 'desc',
    }),
  },
};

router.get('/', celebrate(schema), validateAuth, getAllLeads);
export default router;
