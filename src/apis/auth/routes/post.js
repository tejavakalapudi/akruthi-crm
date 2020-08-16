import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createAuth from '../controllers/post';
import createConnection from '../../../helpers/createConnection';

const router = express.Router();

const schema = {
  body: Joi.object()
    .keys({
      client_name: Joi.string().required(),
    })
    .required(),
};

router.post('/', celebrate(schema), createConnection, createAuth);

export default router;
