import { Request, Response, Router } from "express"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserInterface } from '../interfaces/UserInterface'
import { UserService } from "../services/UserService"

export const loginRouter = Router()

loginRouter.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body

    const userService = new UserService()
    const userData = await userService.fetchAll()
    const user: UserInterface | undefined = userData.find(u => u.email === email) 
    if (user === undefined) {
        res.status(400).send('User not found')
        return
    }
    if (!process.env.SECRET_TOKEN) {
        res.status(500).send('No token provided')
        return
    }

    bcrypt.compare(password, user.password)
        .then((result) => {
            if (!result) {
                res.status(400).send({ token: 'Usuario o contraseña incorrectos' })
                return
            } else {
                const token = jwt.sign({ email: user.email }, process.env.SECRET_TOKEN as string, { expiresIn: '1h' })
                res.status(200).send({ token: token })
            }
        })

})