import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'] || req.query.token

    if (!authHeader || typeof authHeader !== 'string') {
        return res.status(403).json({ message: 'No token provided' })
    }

    jwt.verify(authHeader, process.env.SECRET_TOKEN as string, err => {
        if (err) {
            return res.status(403).json({ message: 'Unauthorized' })
        }

        next()
    })
}