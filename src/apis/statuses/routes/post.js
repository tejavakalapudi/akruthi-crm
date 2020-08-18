import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createStatus from '../controllers/post';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

const schema = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      phase: Joi.array()
        .items(Joi.string())
        .required(),
    })
    .required(),
};

router.post('/', celebrate(schema), validateAuth, createStatus);

export default router;
