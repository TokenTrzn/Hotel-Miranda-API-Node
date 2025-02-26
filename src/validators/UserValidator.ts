import { UserInterface } from "../interfaces/UserInterface"

export const validateUser = (user: UserInterface) => {    
    if (typeof user.photo !== 'string' || user.photo === null) {
        throw new Error('Invalid File')
    }
    if (typeof user.name !== 'string' || user.name === null) {
        throw new Error('Invalid Name')
    }
    if (typeof user.email !== 'string' || user.email === null) {
        throw new Error('Invalid Email')
    }
    if (typeof user.startDate !== 'string' || user.startDate === null) {
        throw new Error('Invalid Date')
    }
    if (typeof user.description !== 'string' || user.description === null) {
        throw new Error('Invalid Description')
    }
    if (typeof user.contact !== 'boolean' || user.contact === null) {
        throw new Error('Invalid Contact')
    }
    if (!["ACTIVE", "INACTIVE"].includes(user.status)) {
        throw new Error("Invalid Status");
    }
}