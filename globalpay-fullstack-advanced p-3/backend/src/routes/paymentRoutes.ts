import { Router } from 'express';
import { createPaymentIntent, confirmPayment, refundPayment } from '../controllers/paymentController';

const router = Router();
router.post('/', createPaymentIntent);
router.post('/:id/confirm', confirmPayment);
router.post('/:id/refund', refundPayment);
export default router;
