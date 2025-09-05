import { Router } from 'express';
import { createCustomer, listCustomers } from '../controllers/customerController';

const router = Router();
router.post('/', createCustomer);
router.get('/', listCustomers);
export default router;
