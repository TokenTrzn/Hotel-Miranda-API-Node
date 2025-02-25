import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserInterface } from "../interfaces/UserInterface";
import { UserService } from './UserService';

export class LoginService {
    static async login(email: string, password: string): Promise<string | null> {
        try {

            const userService = new UserService()
            const userData = await userService.fetchAll()
            const user: UserInterface | undefined = userData.find(u => u.email === email)
            if (user === undefined) {
                return null
            }

            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                return null
            }

            if (!process.env.SECRET_TOKEN) {
                throw new Error('SECRET_TOKEN is not provided')
            }

            const token = jwt.sign(
                { email: user.email },
                process.env.SECRET_TOKEN as string,
                { expiresIn: '1h' }
            )
            return token
        } catch (error) {
            throw error
        }
    }
}