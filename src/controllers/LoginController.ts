import { NextFunction, Request, Response, Router } from "express"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserInterface } from '../interfaces/UserInterface'
import { UserService } from "../services/UserService"

export const loginRouter = Router()

loginRouter.post('/login', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password } = req.body
    const userService = new UserService()

    try {
        const userData = await userService.fetchAll()
        const user: UserInterface | undefined = userData.find(u => u.email === email)
        if (user === undefined) {
            res.status(400).send('User not found')
            return
        }        
        if (password !== user.password) {
            res.status(401).json({ message: 'Incorrect Password' })
            return
        }
        if (!process.env.SECRET_TOKEN) {
            res.status(500).send('No token provided')
            return
        }
        const token = jwt.sign({ email: user.email }, process.env.SECRET_TOKEN as string, { expiresIn: '1h' })
        res.status(200).json({ token, email: user.email, name: user.name })
        
    } catch (error) {
        throw error
    }
})