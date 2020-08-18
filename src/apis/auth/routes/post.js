import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createAuth from '../controllers/post';
import createConnection from '../../../middlewares/createConnection';
import validateAuth from '../../../middlewares/validateAuth';
import addAdminAccess from '../../../middlewares/addAdminAccess';

const router = express.Router();

const schema = {
  body: Joi.object()
    .keys({
      client_name: Joi.string().required(),
    })
    .required(),
};

router.post('/', celebrate(schema), validateAuth, addAdminAccess, createConnection, createAuth);

export default router;
