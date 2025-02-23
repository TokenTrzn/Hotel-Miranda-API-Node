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

    async update(id: number, user: UserInterface): Promise<UserInterface | null> {
        try {
            const userToUpdate: UserInterface | null = await UserModel.findById(id)
            if (userToUpdate === null) {
                throw new Error('User Not Found')
            }
            const userObj = userToUpdate.toObject()
            const updatedUser = { ...userObj, ...user }
            await UserModel.findByIdAndUpdate(id, updatedUser)

            return updatedUser
        } catch (error) {
            throw error
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            const userToDelete = await UserModel.findById(id)
            if (userToDelete === null) {
                throw new Error('User Not Found')
            }
            await UserModel.findByIdAndDelete(id)
            return true
        } catch (error) {
            throw error
        }
    }
}