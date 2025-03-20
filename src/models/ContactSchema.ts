import mongoose from "mongoose";
import { ContactInterface } from "../interfaces/ContactInterface";


const ContactSchema = new mongoose.Schema<ContactInterface>({
    date: {
        type: String,
        required: true
    },
    hour: {
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
    phone: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    isArchived: {
        type: Boolean,
        required: true
    },
})

export const ContactModel = mongoose.model<ContactInterface>('Contact', ContactSchema)