import { UserInterface } from "../interfaces/UserInterface";
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

    async fetchById(id: string): Promise<UserInterface> {
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

    async update(id: string, user: UserInterface): Promise<UserInterface | null> {
        try {
            const updatedUser: UserInterface | null = await UserModel.findByIdAndUpdate(
                { id: id },
                user
            )
            if (updatedUser === null) {
                return null
            }

            return updatedUser
        } catch (error) {
            throw error
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const deletedUser = await UserModel.findByIdAndDelete(id)
            if (deletedUser === null) {
                throw new Error('User Not Found')
            }

            return true
        } catch (error) {
            throw error
        }
    }
}