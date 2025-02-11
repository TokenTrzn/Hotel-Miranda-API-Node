import { UserInterface } from "../interfaces/UserInterface";
import usersData from '../data/usersData.json'
import { ServiceInterface } from "../interfaces/ServiceInterface";


export class UserService implements ServiceInterface<UserInterface> {
    private users: UserInterface[] = usersData as UserInterface[]

    fetchAll(): UserInterface[] {
        return this.users
    }

    fetchById(id: number): UserInterface | undefined {
        return this.users.find((user) => user.id === id)
    }

    create(User: UserInterface): UserInterface {
        const newUser = { ...User, id: this.users.length + 1 }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, User: UserInterface): UserInterface | null {
        const userToUpdate = this.users.filter((user) => user.id === id)
        if (userToUpdate.length > 0) {
            const updateUser = { ...userToUpdate[0], ...User }
            const result = this.users.filter((user) => user.id !== id)
            result.push(updateUser)
            this.users = result
            return updateUser
        }
        return null
    }

    delete(id: number): boolean {
        const UserToDelete = this.users.filter((user) => user.id === id)
        if (UserToDelete.length > 0) {
            this.users = this.users.filter((user) => user.id !== id)
            return true
        }
        return false
    }
}