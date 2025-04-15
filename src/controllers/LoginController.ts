import { Request, Response, Router } from "express"
import users from '../data/usersData.json'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserInterface } from '../interfaces/UserInterface'

export const loginRouter = Router()

loginRouter.post('/', (req: Request, res: Response) => {
    const { email, password } = req.body

    const user: UserInterface[] = users.filter(u => u.email === email)
    if (user.length === 0) {
        res.status(400).send('User not found')
    }
    if (!process.env.SECRET_TOKEN) {
        res.status(500).send('No token provided')
    }

    bcrypt.compare(password, user[0].password)
        .then((result) => {
            if (!result === false) {
                res.status(400).send({ token: 'Usuario o contraseña incorrectos' })
                return
            } else {
                const token = jwt.sign({ email: user[0].email }, process.env.SECRET_TOKEN as string, { expiresIn: '1h' })
                res.status(200).send({ token: token })
            }
        })

})