import express from 'express';
import createAuth from '../controllers/post';
import validateAuth from '../../../middlewares/validateAuth';
import addAdminAccess from '../../../middlewares/addAdminAccess';

const router = express.Router();

router.post('/', validateAuth, addAdminAccess, createAuth);

export default router;
