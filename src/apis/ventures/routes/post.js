import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createVenture from '../controllers/post';
import verifyAuth from '../../../middlewares/authHelper';

const router = express.Router();

const schema = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      flats: Joi.array()
        .items(Joi.string())
        .required(),
    })
    .required(),
};

router.post('/', celebrate(schema), verifyAuth, createVenture);

export default router;
