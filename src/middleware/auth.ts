import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { AuthInterface } from "../interfaces/AuthInterface";

declare module "express" {
    interface Request {
      user?: AuthInterface;
    }
  }

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'] || req.query.accessToken

    if (authHeader === undefined || typeof authHeader !== 'string') {
        return res.status(403).json({ message: 'No token provided' })
    }

    const token = process.env.SECRET_TOKEN
    
    if (token === undefined) {
        return res.status(500).json({ message: 'No token provided' })
    }

    jwt.verify(authHeader, token, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Unauthorized' })
        }

        const user = decoded as AuthInterface
        if (!user || !user.user) {
            return res.status(403).json({ message: 'Invalid token' })
        }
        req.user = user
        next()
    })
}