import mongoose from "mongoose"
import { RoomInterface } from "../interfaces/RoomInterface"

const RoomSchema = new mongoose.Schema<RoomInterface>({
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
    },
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
})

export const RoomModel = mongoose.model<RoomInterface>('Room', RoomSchema)