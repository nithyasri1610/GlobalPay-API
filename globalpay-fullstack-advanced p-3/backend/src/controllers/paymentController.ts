import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createPaymentIntent(req: Request, res: Response) {
  const { customerId, amount, currency } = req.body;
  const payment = await prisma.payment.create({
    data: { customerId, amount, currency, status: 'PENDING' }
  });
  res.json(payment);
}

export async function confirmPayment(req: Request, res: Response) {
  const { id } = req.params;
  const payment = await prisma.payment.update({
    where: { id: Number(id) },
    data: { status: 'CONFIRMED' }
  });
  res.json(payment);
}

export async function refundPayment(req: Request, res: Response) {
  const { id } = req.params;
  const payment = await prisma.payment.update({
    where: { id: Number(id) },
    data: { status: 'REFUNDED' }
  });
  res.json(payment);
}
