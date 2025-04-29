// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import { prisma } from '../lib/prisma';

// interface JwtPayload {
//   userId: string;
// }

// declare global {
//   namespace Express {
//     interface Request {
//       user?: any;
//     }
//   }
// }

// export const authenticateToken = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) {
//       return res.status(401).json({ message: 'No token provided' });
//     }

//     const { userId } = jwt.verify(
//       token,
//       process.env.JWT_SECRET || 'your-secret-key'
//     ) as JwtPayload;

//     const user = await prisma.user.findUnique({
//       where: { id: userId },
//     });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };