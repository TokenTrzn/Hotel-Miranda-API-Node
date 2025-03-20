import { UserInterface } from "../interfaces/UserInterface";
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { UserModel } from "../models/UserSchema";
import { connectSql } from "../utils/database";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export const getUsers = async () => {
    const [rows] = await connectSql.query('SELECT * FROM users')
    return rows
}

export const getUserById = async (id: number) => {
    const [user] = await connectSql.query<RowDataPacket[]>('SELECT * FROM users WHERE id = ?', [id])
    return user[0]
}

export const createUser = async (user: UserInterface) => {
    const [result] = await connectSql.query<ResultSetHeader>(
        'INSERT INTO users (photo, name, email, startDate, description, contact, status, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [user.photo, user.name, user.email, user.startDate, user.description, user.contact, user.status, user.password]
    )
    return result
}

export const updateUser = async (id: number, user: UserInterface) => {
    const [result] = await connectSql.query<ResultSetHeader>(
        'UPDATE users SET photo = ?, name = ?, email = ?, startDate = ?, description = ?, contact = ?, status = ?, password = ? WHERE id = ?',
        [user.photo, user.name, user.email, user.startDate, user.description, user.contact, user.status, user.password, id]
    )
    return result
}

export const deleteUser = async (id: number) => {
    const [result] = await connectSql.query<ResultSetHeader>('DELETE FROM users WHERE id = ?', [id])
    return result
}






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