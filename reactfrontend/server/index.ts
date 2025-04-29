import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeDatabase } from './db/index.js';
import { productRoutes } from './routes/products.js';
import { authRoutes } from './routes/auth.js';
import { orderRoutes } from './routes/orders.js';
import { errorHandler } from './middleware/errorHandler.js';
import { authenticateToken } from './middleware/auth.js';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  // Initialize database
  const db = await initializeDatabase();
  app.locals.db = db;

  app.use(cors());
  app.use(express.json());

  // Public routes
  app.use('/api/auth', authRoutes);
  app.use('/api/products', productRoutes);

  // Protected routes
  app.use('/api/orders', authenticateToken, orderRoutes);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch(console.error);