import mongoose from "mongoose";
import { BookingInterface } from "../interfaces/BookingInterface";
import { RoomInterface } from "../interfaces/RoomInterface";
import { RoomModel } from "./RoomSchema";


const BookingSchema = new mongoose.Schema<BookingInterface>({
    guestName: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        required: true
    },
    orderDateHour: {
        type: String,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkInHour: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    checkOutHour: {
        type: String,
        required: true
    },
    specialRequest: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Check In', 'Check Out', 'In Progress']
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amenities: {
        type: [String],
        required: true
    },
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Room'
        }
    ]
})

export const BookingModel = mongoose.model<BookingInterface>('Booking', BookingSchema)