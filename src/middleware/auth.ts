import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

declare module "express-serve-static-core" {
    interface Request {
      user?: any;
    }
  }

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(403).json({ message: 'No token provided' })
    }

    jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        req.user = decoded
        next()
    })
}