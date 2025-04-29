import express from 'express';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

const router = express.Router();

const orderItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().positive(),
});

const createOrderSchema = z.object({
  items: z.array(orderItemSchema),
});

router.post('/', async (req, res) => {
  try {
    const { items } = createOrderSchema.parse(req.body);
    const userId = req.user.id;

    // Calculate total amount and create order
    let totalAmount = 0;
    const productIds = items.map(item => item.productId);
    const products = await prisma.product.findMany({
      where: { id: { in: productIds } },
    });

    const orderItems = items.map(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) throw new Error('Product not found');
      
      totalAmount += product.price * item.quantity;
      
      return {
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      };
    });

    const order = await prisma.order.create({
      data: {
        userId,
        totalAmount,
        items: {
          create: orderItems,
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
});

router.get('/', async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

export const orderRoutes = router;