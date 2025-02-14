import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

declare module "express-serve-static-core" {
    interface Request {
      user?: any;
    }
  }

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization']

    if (req.query.error) {
        res.status(400).json({ message: 'Bad request' })
        return
    }

    if (!authHeader) {
        res.status(403).json({ message: 'No token provided' })
        return
    }

    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader

    jwt.verify(token, process.env.SECRET_TOKEN as string, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        req.user = decoded
        next()
    })
}