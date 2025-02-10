import { Request, Response, Router } from "express"
import users from '../data/usersData.json'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserInterface } from '../interfaces/UserInterface'

export const loginRouter = Router()

loginRouter.post('', (req: Request, res: Response) => {
    console.log(req.body)
    const { email, password } = req.body

    const user: UserInterface[] = users.filter(u => u.email === email)
    if (user.length === 0) {
        res.status(400).send('Usuario no encontrado')
    }
})