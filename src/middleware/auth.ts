import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

declare module "express-serve-static-core" {
    interface Request {
      user?: any;
    }
  }

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization']
    if (req.query.error) {
        res.status(400).json({ message: 'Bad request' })
        return
    }

    if (!token) {
        res.status(403).json({ message: 'No token provided' })
        return
    }

    next()

    jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        req.user = decoded
        next()
    })
}