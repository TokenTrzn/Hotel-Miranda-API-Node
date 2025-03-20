import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { UserInterface } from "../interfaces/UserInterface";

declare module "express" {
    interface Request {
      user?: UserInterface;
    }
  }

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (token === undefined) {
        res.status(403).json({ message: 'Access denied. Token is required' })
    }

    else {
        jwt.verify(token, process.env.TOKEN_SECRET as string, error => {
            if (error) {
                res.status(403).json({ message: 'Invalid token' })
            }
            next()
        })
    }
}