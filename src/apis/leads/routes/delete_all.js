import express from 'express';
import { celebrate, Joi } from 'celebrate';
import deleteLead from '../controllers/delete';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

const schema = {
  body: Joi.array().items(Joi.string().guid()),
};

router.delete('/', celebrate(schema), validateAuth, deleteLead);
export default router;
