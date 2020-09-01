import express from 'express';
import getHousingLeads from '../controllers/get_housing';

const router = express.Router();
router.get('/', getHousingLeads);
export default router;
