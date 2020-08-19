import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createVenture from '../controllers/post';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

const schema = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      flats: Joi.array()
        .items(Joi.string())
        .required(),
      available: Joi.array().items(Joi.string()),
    })
    .required(),
};

router.post('/', celebrate(schema), validateAuth, createVenture);

export default router;
