import mongoose from "mongoose"
import { RoomInterface } from "../interfaces/RoomInterface"

const RoomSchema = new mongoose.Schema<RoomInterface>({
    id: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amenities: {
        type: [String],
        required: true
    },
    price: {
        type: String,
        required: true
    },
    offerPrice: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Booked', 'Available']
    }
})

export const RoomModel = mongoose.model<RoomInterface>('Room', RoomSchema)