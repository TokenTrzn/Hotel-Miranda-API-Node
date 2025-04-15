import { AuthInterface } from "../interfaces/AuthInterface";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authData from '../data/authData.json'

export class LoginService {

    static async login(email: string, password: string): Promise<string | null> {
        const user: AuthInterface[] = authData.filter(u => u.user === email)
        if (user.length === 0) {
            return null
        }

        const validPassword = await bcrypt.compare(password, user[0].password)
        if (!validPassword) {
            return null
        }

        const token = jwt.sign(
            { email: user[0].user }, 
            process.env.SECRET_TOKEN as string, 
            { expiresIn: '1h' }
        )
        return token
    }
}