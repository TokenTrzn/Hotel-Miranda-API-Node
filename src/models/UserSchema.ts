import mongoose from "mongoose"
import { UserInterface } from "../interfaces/UserInterface"

const UserSchema = new mongoose.Schema<UserInterface>({
    id: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['ACTIVE', 'INACTIVE']
    },
    password: {
        type: String,
        required: true
    }
})

export const UserModel = mongoose.model<UserInterface>('User', UserSchema)