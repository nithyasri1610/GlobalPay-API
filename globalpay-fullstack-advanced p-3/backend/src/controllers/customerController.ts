import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createCustomer(req: Request, res: Response) {
  const { name, email } = req.body;
  const customer = await prisma.customer.create({ data: { name, email } });
  res.json(customer);
}

export async function listCustomers(req: Request, res: Response) {
  const customers = await prisma.customer.findMany();
  res.json(customers);
}
