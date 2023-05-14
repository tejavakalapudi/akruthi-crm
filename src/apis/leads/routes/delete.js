import express from 'express';
import { Joi, celebrate } from 'celebrate';
import deleteLead from '../controllers/delete';
import validateAuth from '../../../middlewares/validateAuth';
import validateAdmin from '../../../middlewares/validateAdmin';

const router = express.Router();

const schema = {
  params: {
    ids: Joi.string().required(),
  },
};

router.delete('/:ids', celebrate(schema), validateAuth, validateAdmin, deleteLead);
export default router;
