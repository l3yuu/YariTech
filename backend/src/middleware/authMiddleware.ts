import jwt from 'jsonwebtoken';
import express from 'express';
import User from '../models/User.js';

interface DecodedToken {
  id: string;
}

export const protect = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token as string, (process.env.JWT_SECRET as string) || '') as unknown as DecodedToken;

      // Get user from the token
      (req as any).user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export const admin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if ((req as any).user && (req as any).user.role === 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};
