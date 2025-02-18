import { UserInterface } from "../interfaces/UserInterface";
import usersData from '../data/usersData.json'
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { UserModel } from "../models/UserSchema";


export class UserService implements ServiceInterface<UserInterface> {
    async fetchAll(): Promise<UserInterface[]> {
        try {
            const users: UserInterface[] = await UserModel.find()
            return users
        } catch (error) {
            throw error
        }
    }

    async fetchById(id: number): Promise<UserInterface> {
        try {
            const user: UserInterface | null = await UserModel.findById(id)
            if (!user) {
                throw new Error('User Not Found')
            }
            return user
        } catch (error) {
            throw error
        }
    }

    async create(user: UserInterface): Promise<UserInterface> {
        const newUser = new UserModel(user)
        await newUser.save()
        return newUser
    }

    update(id: number, user: UserInterface): Promise<UserInterface | null> {
        return Promise.resolve(null)
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(false)
    }
}